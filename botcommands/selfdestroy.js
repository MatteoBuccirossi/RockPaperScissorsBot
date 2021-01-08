const discord = require('discord.js');

module.exports={
    name: "!selfdestroy",
    description: "basically a command to kick yourself",
    execute(msg, arg, botName){
        let attach = new discord.MessageAttachment('../discordbot/assets/adios.png');
        msg.reply(attach);
        msg.member.kick('Adios').then(()=>{
           msg.channel.send(`${msg.member.user.username} selfdestructed.`);
        }).catch(e=>{
            msg.reply('Unable to selfdestroy.')
        })
    }
}