const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    if (!message.guild) {
    const saykoozelmesajuyari = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(saykoozelmesajuyari);
  }
  
  let öpülcek = message.mentions.members.first();

  if (!öpülcek) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Havayı Mı Öpeceksin")
        .setDescription(`Lütfen Öpmek İstediğiniz Kullanıcıyı Etiketleyin.`)
      .setFooter(`Saptify | muck muck`)
    );
  }

  if (öpülcek.user.id == message.author.id) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Herhalde Dudağın Uzayabiliyor`)
        .setDescription(`Yavrucuğum Kendini Nasıl Öpeceksin.`)
      .setFooter(`Saptify | muck muck`)
    );
  }

  if (öpülcek.user.id == client.user.id) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter(`Saptify | muck muck`)
        .setTitle(`Teşekkürler♥`)
        .setDescription(`Beni Öptüğün İçin Teşekkürler Ama Ben Bir Robotum :(`)
      
    );
  }

  message.channel.send(
    new Discord.MessageEmbed()
      .setTitle(`${message.author.username}, ${öpülcek.user.username}'İ Öptü.`)
      .setImage("https://cdn.discordapp.com/attachments/759383061669871626/760155043751526430/tenor.gif")
    .setFooter(`Saptify | muck muck`)
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "öp",
  description: "Etiketlediginiz Kişiyi Öpersiniz",
  usage: "öp <kullanıcı>"
};

//TEST EDİLDİ