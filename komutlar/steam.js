const db = require('quick.db');
const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();
 
exports.run = (client, message, args) => {
    let oyun = args.slice(0).join(` `)
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
 
    if(!oyun) return message.channel.send(`Bir oyun adı girmelisin!`)
        provider.search(oyun).then(result => {
        provider.detail(result[0].id, "turkey", "tr").then(results => {
            let kontrolfiyat;
            if(results.priceData.initialPrice == `0.0`) kontrolfiyat = `Ücretsiz`
            else kontrolfiyat = results.priceData.initialPrice
 
            let kontrolmetacritic;
            if(results.otherData.metacriticScore == null) kontrolmetacritic = `Bilinmiyor`
            else kontrolmetacritic = results.otherData.metacriticScore
 
        const embed = new Discord.MessageEmbed()
        .setImage(results.otherData.imageUrl)
        .setColor("BLACK")
        .setAuthor('Steam Mağazası', steampng)
        .setTitle(result[0].name)
        .addField(`Oyunun ID'si`, result[0].id)
        .addField('Oyunun fiyatı',kontrolfiyat)
        .addField('Oyunu Destekleyen Platformlar', results.otherData.platforms)
        .addField('Metacritic Puanı', kontrolmetacritic)
        .addField('Oyunun Geliştiricileri', results.otherData.developer)
        .setFooter(`Cylx © | Tüm hakları saklıdır.`)
        message.channel.send(embed)
        })
    }).catch(error => {
    message.channel.send(`<a:unlem:730484050288181329> Steam üzerinde böyle bir oyun bulamadım!`);
})
 
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [`steam`],
    kategori: 'bot',
    permLevel: 0
};
 
  exports.help = {
    name: 'steamstore',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};