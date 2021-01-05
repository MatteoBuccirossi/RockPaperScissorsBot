
function notBot(username, botName){
    if(username != botName){
        return true;
    }else{
        return false;
    }
}

module.exports={
    name: "!random",
    description: "gives out random number.",
    execute(msg, arg, botName){
        if(notBot(msg.author.username, botName)){
            msg.reply(Math.ceil(Math.random()* 1000));
        }
    }
}
