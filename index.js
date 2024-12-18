/*
Created With char-mod-mail Package.
Created By Odd Coder.
Odd Coder Discord: https://discord.gg/7KtdeePrHV
Odd Coder Youtube: https://www.youtube.com/channel/UCwsiWQMSomXFjWWpRQbc35A
Thanks for using our coded bot.
*/
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Odd is better.'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "1072112392026210414", //put your guild id here
  categoryID: "1072112392646951065", //put your category id here
  staffRole: "1085136129629630515", //put your staff role id here
  embedColor: "#2f3136", //change the hax color code if you want
  anonymousReply: false, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "Ticket closed",
  closedMessage: "Your ticket has been closed! thankyou for reaching out to HRSgroup!",
  staffOpenedTitle: "User Opened A Ticket!",
  staffOpenedMessage: "The User Opened A Mod Mail And Is Now Wait For A Reply!",
  userOpenedTitle: "Ticket Created!",
  userOpenedMessage: "Please wait for our staff to respond!",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});
