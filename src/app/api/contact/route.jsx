export async function POST(req) {
  const data = await req.json();
  
  if (!data.name || !data.email || !data.message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("New message:", data);

  return Response.json({ success: true });
}
