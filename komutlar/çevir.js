const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let google = args.slice(0).join('+');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
        if(!link)return message.reply("Hata !")
  if(!google) return message.reply("**Lütfen Ne Çevireceğimi Yaz**")
        let embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTimestamp()
    
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
.setFooter('Google Çeviri') 
.setFooter(`Saptify`)
          
    message.channel.send(embed);

  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gçeviri'],
  permLevel: 0
};

exports.help = {
  name: 'çevir',
  description: 'Dil Çevirme Komutudur.',
  usage: 'çevir'
};

