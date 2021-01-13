const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("Saptify | Moderasyon komutları")
.setThumbnail("")
.setDescription(`


> **» !avatar :Belirtilen avatarı atar** ,
> **» !rastgele :Rastgele sunucudan birini seçer** ,
> **» !emojiler :Sunucuda bulunan emojileri gösterir** ,
> **» !sohbetaç/kapat :Bulunulan odada mesajlaşmayı açıp kapatır** ,
> **» !kick :Belirtilen kişiyi sunucudan kickler** ,
> **» !kurallar :Önceden hazırlanmış sunucu kuralları paylaşır** ,
> **» !sunucukur :Sunucunuzdaki herşeyi silip kendisi kurar** ,
> **» !bilgi :Etiketlenen kişi hakkında bilgi verir** ,
> **» !üyesay :Sunucuda bulunan üye sayısını gösterir** ,

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/zrc63yA)** **•** **[Botun Davet Linki](https://discordapp.com/oauth2/authorize?client_id=708413383451344936&scope=bot&permissions=0)** 
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
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
    name: 'moderasyon', 
    description: 'The Help Command',
    usage: 'moderasyon'
};