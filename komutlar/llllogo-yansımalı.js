const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bişey Yaz")
  let link = "https://flamingtext.com/net-fu/proxy_form.cgi?script=brushed-metal-logo&_loc=generate&imageoutput=true&text="+isim
  const embed = new Discord.MessageEmbed()
  .setImage(link)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["skull", "skulllogo"],
  kategori: 'logolar',
  permLevel: 0
};

exports.help = {
  name: 'yansımalı',
  description: 'Logo Yaparsınız',
  usage: 'skull-logo <yazı>'
};