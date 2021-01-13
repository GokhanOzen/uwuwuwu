const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let kanalid = message.channel.id;
let channel = bot.channels.get("797804986763313183")
let embed = new Discord.RichEmbed()
.setTitle("Saptify Sıkıntısı")
.addField("Bug", bug)
.addField("Bildiren", user, true)
.setColor("RANDOM")
  const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      `${message.author.username}, Bulduğunuz hata bildirildi, moderatörler en yakın zamanda dönecektir!`)
    message.channel.send(embed2)
channel.send(embed).then(message => {
  message.react('❌')
  message.react('✔')
  });
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hata', 'hatabildir'],
  permLevel: 0  
};
exports.help = {
  name: 'bildir',
  description: 'Botlafds ilgili hataları bildirirsiniz.',
  usage: 'bildir'
}