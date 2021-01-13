const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("Yardım Menüsü 🍂")
.setDescription(`


> **» !genel :** *Genel komutları gösterir,*
> **» !moderasyon :** *Düzenli bir sunucu,*
> **» !koruma :** *Sunucuyu saldırılardan koruma*
> **» !eğlence :** *Eğlence komutları,*
> **» !müzik :** *Müzik oynatıcı komutları,*
> **» !kullanıcı :** *Kişisel komutlar,*
> **» !ekstra :** *Ekstra komutlar,*
> **» !destek  :** *Problemleri bildirme*
**[Destek Sunucusu](https://discord.gg/zrc63yA)** **•** **[Botu Davet Et](https://discordapp.com/oauth2/authorize?client_id=708413383451344936&scope=bot&permissions=0)** 
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setImage("https://cdn.discordapp.com/attachments/797808858068025344/797809002049175562/tumblr_mn26s76uWS1rzhlxro1_250.gif")
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'yardım'
};