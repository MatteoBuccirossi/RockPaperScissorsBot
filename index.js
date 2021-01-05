const discord = require('discord.js');
const env = require('dotenv');

env.config();

const bot = new discord.Client();

bot.login(process.env.TOKEN);

const rockPaperscis= ['Rock', 'Paper', 'Scissors'];

const resultReaction = {
    won: "Ah, you've lost.",
    lost: "It's not possible, I seem to have lost.",
    draw: "Let's play again, shall we?"
}

//messages middlewares
function notBot(username){
    if(username != bot.user.username){
        return true;
    }else{
        return false;
    }
}

function rockPaper(msg){
    if(msg.includes('paper') || msg.includes('rock') || msg.includes('scissors')  ){
        return true;
    }else{
        return false;
    }
}

function haveIWon(my, his, reaction){
   if(his.includes('rock')){
       if(my == 'Rock'){
           return reaction.draw;
       }else if(my == 'Scissors'){
           return reaction.lost;
       }else{
           return  reaction.won;
       }
   }else if(his.includes('paper')){
    if(my == 'Paper'){
        return reaction.draw;
    }else if(my == 'Rock'){
        return reaction.lost;
    }else{
        return reaction.won;
    }
   }else if(his.includes('scissors')){
    if(my == 'Scissors'){
        return reaction.draw;
    }else if(my == 'Paper'){
        return reaction.lost;
    }else{
        return reaction.won;
    }
   }
}


//connecting to bot
bot.on('ready', ()=>{
    console.log("yeah, yeah, i'm in");
});




//where the magic happens
bot.on('message', (msg)=>{
   if(notBot(msg.author.username)){
       if(rockPaper(msg.content)){
           let userPlay = msg.content;
           let myPlay = rockPaperscis[Math.floor(Math.random()* rockPaperscis.length)];
           console.log(myPlay);
           msg.reply(myPlay)

           let result = haveIWon(myPlay, userPlay, resultReaction);
           msg.channel.send(result);
       }else{
           msg.reply(' Silence!');
       }


   }
});