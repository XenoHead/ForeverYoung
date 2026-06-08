export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    
    if (!body.phone) {
      return new Response(JSON.stringify({ error: "Missing phone number" }), { 
        status: 400, headers: { "Content-Type": "application/json" }
      });
    }
    
    const db = env.DB;
    const result = await db.prepare(
      "UPDATE users SET last_checkin = CURRENT_TIMESTAMP WHERE phone = ?"
    ).bind(body.phone).run();

    if (result.success && result.meta.changes > 0) {
      return new Response(JSON.stringify({ success: true }), { 
        status: 200, headers: { "Content-Type": "application/json" } 
      });
    } else {
      return new Response(JSON.stringify({ error: "User not found. Please ask staff to help activate your card." }), { status: 404 });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
