const admin = require('../middleware/admin');

module.exports={
    name: "!kick",
    description: "'!kick [user]' to kick someone",
    execute(msg, arg, botName){
        if(admin(msg)){
            let user = msg.mentions.users.first();

            if(user){
              let member = msg.guild.member(user);
              if(member){
                  member.kick('Ya have been kicked, how does that feel?').then(()=>{
                      msg.reply(`Kicked ${user.tag}` );
                  });
            }
        }
    }else{
        msg.reply("Puny human, you're not an admin are you?");
    }
  }
}