export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    
    if (!body.phone || !body.name) {
      return new Response(JSON.stringify({ error: "Missing name or phone" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    const db = env.DB;
    // Insert new user, or update their name if they are re-activating
    const result = await db.prepare(
      "INSERT INTO users (phone, name, punches_cd, punches_vinyl, punches_cassette, punches_45) VALUES (?, ?, 0, 0, 0, 0) ON CONFLICT(phone) DO UPDATE SET name=excluded.name"
    ).bind(body.phone, body.name).run();

    if (result.success) {
      return new Response(JSON.stringify({ success: true, phone: body.phone, name: body.name }), { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
