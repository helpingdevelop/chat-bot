const express = require('express');
const Bot = require('messenger-bot');

const app = express();
const bot = new Bot({
  token: 'your-page-token',
  verify: 'a-verify-string (can be anything)',
  app_secret: 'your-app-secret',
});

bot.on('error', (err) => {
  console.log(err.message)
});

bot.on('message', ({ message }, reply) => {
  const feeling = message.nlp.entities.sentiment[0].value
  reply({
    text: `Why so ${feeling}?`,
  });
});

app.use(bot.middleware());
app.listen(2000, () => {
  console.log('The server is running');
});