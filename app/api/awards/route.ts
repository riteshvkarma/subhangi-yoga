interface AwardApiItem {
  filename: string;
  url: string;
}

export async function GET() {
  try {
    const res = await fetch("http://api.vishwabhartiprojects.com/awards.php", {
      cache: "no-store",
    });

    const data = await res.json();

    // Handle BOTH formats:
    // 1) ["file1.webp", "file2.webp"]
    // 2) { images: [{ filename: "file1.webp" }] }

    let filenames: string[] = [];

    if (Array.isArray(data)) {
      filenames = data;
    } else if (Array.isArray(data.images)) {
      filenames = data.images.map((img: { filename: string }) => img.filename);
    }

    const images: AwardApiItem[] = filenames.map((name) => ({
      filename: name,
      url: `http://api.vishwabhartiprojects.com/uploads/awards/${name}`,
    }));

    return Response.json({ images });
  } catch {
    return Response.json({ images: [] });
  }
}
