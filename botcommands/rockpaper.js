

const rockPaperscis= ['Rock', 'Paper', 'Scissors'];


const resultReaction = {
    won: "Ah, you've lost.",
    lost: "It's not possible, I seem to have lost.",
    draw: "Let's play again, shall we?"
}


//messages middlewares
function notBot(username, botName){
    if(username != botName){
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

module.exports = {
    name: "!playrps",
    description: "Plays rock paper scissors",
    execute(msg, args, botName){
        if(notBot(msg.author.username, botName)){
            if(rockPaper(msg.content)){
                let userPlay = msg.content;
                let myPlay = rockPaperscis[Math.floor(Math.random()* rockPaperscis.length)];
                console.log(myPlay);
                msg.reply(myPlay)
     
                let result = haveIWon(myPlay, userPlay, resultReaction);
                msg.channel.send(result);
            }
        }
    }
}