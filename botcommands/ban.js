const discord = require('discord.js');
const admin = require('../middleware/admin');

module.exports={
    name: "!ban",
    description: "'!ban [user]' to ban someone",
    execute(msg, arg, botName){
        if(admin(msg)){
            let user = msg.mentions.users.first();
            if(user){
                let member = msg.guild.member(user);
                if(member){
                    member.ban({
                        reason: "Reasons will be provided"
                    }).then(()=>{
                        msg.reply(`Banned ${user.tag}`);
                    }).catch(e=>{
                        console.log(e);
                        msg.reply("An error occoured, unable to ban");
                    });
                }
            }
        }else{
            msg.reply("You don't seem to have the necessary permissions.")
        }
    }
}