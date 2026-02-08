const API_BASE =
  process.env.AWARDS_API_URL || "https://api.vishwabhartiprojects.com";

interface AwardImage {
  filename: string;
}

interface AwardsResponseFormatOne {
  images: AwardImage[];
}

export async function GET() {
  try {
    const res = await fetch(`${API_BASE}/awards.php`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json({ images: [] });
    }

    const data: unknown = await res.json();

    let filenames: string[] = [];

    // Format 1: ["file1.webp", "file2.webp"]
    if (Array.isArray(data) && data.every((item) => typeof item === "string")) {
      filenames = data as string[];
    }

    // Format 2: { images: [{ filename: "file1.webp" }] }
    else if (
      typeof data === "object" &&
      data !== null &&
      "images" in data &&
      Array.isArray((data as AwardsResponseFormatOne).images)
    ) {
      filenames = (data as AwardsResponseFormatOne).images
        .filter((img) => typeof img.filename === "string")
        .map((img) => img.filename);
    }

    const images = filenames.map((name) => ({
      filename: name,
      url: `${API_BASE}/uploads/awards/${name}`,
    }));

    return Response.json({ images });
  } catch {
    return Response.json({ images: [] });
  }
}
