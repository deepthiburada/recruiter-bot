// api/chat.js — Vercel serverless function (OpenAI version)
// Your OpenAI API key lives ONLY here, in environment variables
// Never in the frontend HTML

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',   // cheap + fast — change to gpt-4o if you want
        max_tokens: 600,
        messages                // includes system message as first item
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('OpenAI error:', err);
      return res.status(response.status).json({ error: 'Upstream API error' });
    }

    const data = await response.json();
    // Return in a simple format the frontend can use
    return res.status(200).json({
      answer: data.choices?.[0]?.message?.content || ''
    });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
