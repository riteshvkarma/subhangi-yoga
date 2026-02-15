export async function GET() {
  try {
    const res = await fetch(
      "https://api.vishwabhartiprojects.com/gallery.php",
      { cache: "no-store" },
    );

    if (!res.ok) {
      return Response.json({ media: [] });
    }

    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json({ media: [] });
  }
}
