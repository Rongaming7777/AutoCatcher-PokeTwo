const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')

const prefix = config.prefix;

client.on("ready", () => {
	console.log("Ready")
});


client.on("message", (message) => {

});


client.login(config.token);