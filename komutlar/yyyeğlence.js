const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("Saptify | Eğlence komutları")
.setThumbnail("")
.setDescription(`


> **» !logoyap :** ,Çeşitli yazı logoları yapabileceğiniz komutlar 
> **» !atatürk :** ,Ulu Önderimizin fotoğraflarını atar
> **» !aşkölçer :** ,Aşk seviyesi ölçer 
> **» !balıktut :** ,Balık tutarsınız
> **» !düello  :** ,Seçtiğiniz kişiyle düello atarsınız
> **» !korkut :** ,Korkunç gif atarsınız
> **» !öp :** ,Etiketlediğiniz kişiyi öpersiniz
> **» !soygunyap :** ,Mekanı basıp soygun yaparsınız 
> **» !kuşdili :** ,Yazdığınız yazıyı kuş diline çevriir
> **» !mcskin :** ,Nickini yazdığınız kişinin mc skinini gösterir
> **» !meme :** ,Reddit sayfalarından meme atar
> **» !döviz :** ,Belirttiğiniz para diliminim Türkiye kurunu gösterir
> **» !adamasmaca :** ,Adamasmaca oynatsınız
> **» !avatar :** ,Belirttiğiniz kişinin avatarını atar
> **» !havadurumu :** ,Belirttiğiniz şehrin hava durumunu gösterir
> **» !saat :** ,Türkiye nin kesin saatini gösterir


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
    name: 'eğlence', 
    description: 'The Help Command',
    usage: 'help'
};