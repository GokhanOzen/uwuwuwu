const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Please enter text.** <a:1603_Animated_Cross:736227888864690277>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/1855d9da-4d1b-478e-92dc-0202d4239fcc/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('Saptify')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tech'],
    permLevel: 0
}

exports.help = {
    name: 'tech',
    description: 'Yasdfdsadsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'tech'
}