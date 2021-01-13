const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor("BLACK")
    .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    .setFooter(`Saptify | Atatürk`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'atatürk',
  usage: 'atatürk'
};
