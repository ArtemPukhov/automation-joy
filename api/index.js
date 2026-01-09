const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, contact, message } = req.body || {};

  if (!name || !contact || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const payload = {
    name,
    contact,
    message,
    source: 'task-line.ru',
    createdAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(
      'https://pukhovn8nserver.online/webhook-test/0f76f90b-b133-4cc3-a743-b5767c35d5ea',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('n8n webhook error:', response.status, errorText);
      return res.status(502).json({
        error: 'Failed to send data to webhook',
        status: response.status,
        body: errorText,
      });
    }

    res.json({ ok: true });
  } catch (error) {
    console.error('Error calling n8n webhook:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
