const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const frenzy_code = args.slice(0).join(' '); 
  if(!frenzy_code) return message.channel.send(`Lütfen yazı yazın!`)
  const yazı = `https://dummyimage.com/2000x500/33363c/ffffff&text=${frenzy_code}`
  
  const embed_frenzy = new Discord.MessageEmbed()
  .setImage(yazı)
  message.channel.send(embed_frenzy)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
name: 'resimyazı',
description: '',
usage: ''
}