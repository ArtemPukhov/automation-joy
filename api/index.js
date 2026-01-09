const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, contact, message } = req.body || {};

  if (!name || !contact || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!telegramBotToken || !telegramChatId) {
    return res.status(500).json({ error: 'Telegram is not configured' });
  }

  const text =
    `Новая заявка с task-line.ru:\n\n` +
    `Имя: ${name}\n` +
    `Контакт: ${contact}\n\n` +
    `Задача:\n${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text,
        parse_mode: 'HTML'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Telegram API error:', errorText);
      return res.status(502).json({ error: 'Failed to send message to Telegram' });
    }

    res.json({ ok: true });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

