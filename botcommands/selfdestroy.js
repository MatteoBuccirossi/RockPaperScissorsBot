module.exports={
    name: "!selfdestroy",
    description: "basically a command to kick yourself",
    execute(msg, arg, botName){
        msg.reply('You will be greatly missed');
        msg.member.kick('Adios').then(()=>{
            msg.channel.send(`${msg.member.user.username} selfdestructed.`);
        })
    }
}