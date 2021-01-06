const discord = require('discord.js');
const env = require('dotenv');

//bot commands
const rockPaper = require('./botcommands/rockpaper');
const random = require('./botcommands/random');
const help = require('./botcommands/help');
const kick = require('./botcommands/kick');
const selfdestruct = require('./botcommands/selfdestruct');

env.config();

const bot = new discord.Client();
bot.commands = new discord.Collection;

bot.commands.set(rockPaper['name'], rockPaper);
bot.commands.set(random['name'], random);
bot.commands.set(help['name'], help);
bot.commands.set(kick['name'], kick);
bot.commands.set(selfdestruct['name'], selfdestruct);

bot.login(process.env.TOKEN);




//connecting to bot
bot.on('ready', ()=>{
    console.log("yeah, yeah, i'm in");

});




//where the magic happens
bot.on('message', (msg)=>{
   const arg = msg.content.split(/ +/);
   const command = arg.shift().toLowerCase();
   

   if(!bot.commands.has(command)){
       console.log('unknown command guv');
       return;
   }

   try{ 
    bot.commands.get(command).execute(msg, bot.commands, bot.user.username);
   }catch(e){
       console.log('Error, guv:' + e);
   }
});