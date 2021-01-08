

module.exports=  function (msg){
        return(msg.member.hasPermission('ADMINISTRATOR') || msg.member.roles.cache.find(r => r.name === "moderator") );
    }
