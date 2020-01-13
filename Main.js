const discord = require('discord.js');
const client = new discord.Client();
var msg = "```Selling services and bots! \n > Raidbot Service \n > Ad service \n > DM Spam Service \n > SMS Spam Service \n > Email Spam Service \n``` **DM <@160843195708604416> for more information!**";

client.on('message', message =>{
    if(message.channel.id != 664221887278350341)
        return;
    message.channel.send(msg)
})

client.login("NjY2MzM5Mzk1NzMyNzY2NzUw.XhyvYA.z9cLBwDh1bp0bbJ-EffjdyIHF90");
client.on("ready", () => {
    console.log("Ready")
})