const discord = require('discord.js');

module.exports ={
    name: "!help",
    description:"help",
    execute(msg ,commands, botName){
        const embed = new discord.MessageEmbed().setTitle('Help Page').setColor(0xffCD00);
        commands.forEach((val, key, map)=>{
            embed.addField(key, val['description']);
        });
        msg.channel.send(embed);
    }
}