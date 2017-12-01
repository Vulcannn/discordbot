const Discord = require ("discord.js");


 module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("your ping is...")
    .setColor("#51FD00")
    .addField(client.ping)
    .addField("ID", message.author.id)
    .addField("Created At ", message.author.createdAt);
    

    message.channel.sendEmbed(embed);


    

    

 }

 module.exports.help = {
     name: "ping" 
 }