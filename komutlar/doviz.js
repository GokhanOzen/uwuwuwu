const Discord = require("discord.js")
const TCMB_Doviz = require('tcmb-doviz');
const db = require('quick.db')
const Doviz = new TCMB_Doviz();
exports.run = async (client, message, args) => {
    let prefix = "-"
    const tarih = await Doviz.guncelTarih();
    let hatali = new Discord.MessageEmbed()
    .setDescription(`**Yanlış kullanım! \n [Kur Birim Kodları](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html**`)
    .setFooter(`Doğru kullanım: ${prefix}döviz USD`)
    .setColor("RANDOM")
    if(!args[0]) return message.channel.send(hatali)
    if(args[0] === `tl` || args[0] === `TL` || args[0] === `Tl` || args[0] === `tL`) {
        let hatali2 = new Discord.MessageEmbed()
        .setDescription(`**Zaten kurları TL birimine çeviriyorum**`)
        .setColor("RANDOM")
        .setFooter(`Cylx © | Tüm hakları saklıdır.`)
        return message.channel.send(hatali2)
    }
    Doviz.getKur(args[0].toUpperCase()).then((state) => {
 
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${state.isim} Güncel Kur Analizi`,client.avatarURL)
        .setDescription(`**Bilgiler [Merkez Bankası](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.**`)
        .setColor("RANDOM")
        .addField(`Alış`,state.alis)
        .addField(`Satış`,state.satis,true)
        .addField(`Birim Kodu`,state.kod,true)
        .setFooter(`Saptify | Kur bilgisi`)
        message.channel.send(embed)
 
       
   
}).catch(error => {
    message.channel.send(`**Dünya üzerinde böyle bir ülke bulamadım!**`);
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["doviz","kur","dövizkur","kuranaliz","kurgetir","dövizanaliz"],
  permLevel: 0
};
exports.help = {
  name: 'döviz',
  description: 'Güncel Döviz kurlarını gösterir.',
  usage: 'döviz'
};

//Test edildi hazır  