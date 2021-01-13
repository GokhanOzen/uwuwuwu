const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("Saptify | Bir problem'mi var")
.setThumbnail("")
.setDescription(`


> **» !canlıdestek :** ,Anlık bir şekilde moderator ile konuşursunuz
> **» !bildir :** ,Belirttiğiniz sorunu yönetime bildirir
> **» !öneri :** ,Bir öneriniz varsa yazıp belirtebilirsiniz
> **» !oyla :** ,Botumuzun daha önlere çıkması için oylama linkini atar
> **» !desteksunucu :** ,Destek sucumuzu atar, direk bizimle konulabilirsiniz
> **» !sunucubilgi :** ,Sunucunuzun premium olup olmadığına bakarsınız 
> **» !premium :** ,Daha fazla özelliğe erişebilmek isterseniz burafayız

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
    name: 'destek', 
    description: 'The Help Command',
    usage: 'destek'
};