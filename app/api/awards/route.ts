interface AwardApiItem {
  filename: string;
}

export async function GET() {
  try {
    const res = await fetch("http://api.vishwabhartiprojects.com/awards.php", {
      cache: "no-store",
    });

    const data = await res.json();

    const images = ((data.images as AwardApiItem[]) || []).map((img) => ({
      filename: img.filename,
      url: `http://api.vishwabhartiprojects.com/uploads/awards/${img.filename}`,
    }));

    return Response.json({ images });
  } catch {
    return Response.json({ images: [] });
  }
}
