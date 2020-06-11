const eris = require('eris');
const {    NzIwNjIxMzkyODI3MjUyNzQ3.XuIsgw.rR4pqU6JqABGK65WF6WYSywC3Cs  } = require('../config.json');

// Create a Client instance with our bot token.
const bot = new eris.Client(  NzIwNjIxMzkyODI3MjUyNzQ3.XuIsgw.rR4pqU6JqABGK65WF6WYSywC3Cs  );

// When the bot is connected and ready, log to console.
bot.on('hazir', () => {
  console.log('Aga hazirim.');
});

// Every time a message is sent anywhere the bot is present,
// this event will fire and we will check if the bot was mentioned.
// If it was, the bot will attempt to respond with "Present".
bot.on('bruh', async (msg) => {
  const botWasMentioned = msg.mentions.find(
    mentionedUser => mentionedUser.id === bot.user.id,
  );

  if (botWasMentioned) {
    try {
      await msg.channel.createMessage('bbbruh');
    } catch (err) {
      // There are various reasons why sending a message may fail.
      // The API might time out or choke and return a 5xx status,
      // or the bot may not have permission to send the
      // message (403 status).
      console.warn('mal orosoxy evladi yanlis yazdin');
      console.warn(err);
    }
  }
});

bot.on('hata ulan', err => {
  console.warn(err);
});

bot.connect();
