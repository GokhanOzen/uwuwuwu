const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Please enter text.** <a:1603_Animated_Cross:736227888864690277>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/22ad22fb-381b-4936-ab66-24ace0f6ddcf?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Saptify')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['burger'],
    permLevel: 0
}

exports.help = {
    name: 'burger',
    description: 'Yasddsffssdsadssğasdasdsdaaaaaaaaaaaaaaaaaaaaaaaaaaasınız yazıyı bannera çevirir.',
    usage: 'burger'
}