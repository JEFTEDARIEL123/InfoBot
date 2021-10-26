const { userMention } = require('@discordjs/builders');
const { Client, Intents, User } = require('discord.js');
const { colors } = require('colors');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});


client.once('ready', () => {
	console.log('#######################'.red)
	console.log('Hey there, It works!'.green);
	console.log('Basic Bot by !Jeft#8819'.green)
	console.log('#######################'.red)
	console.log(' ');
	console.log('Bot Ready!'.blue)
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

    if (commandName === 'web') {
		await interaction.reply('https://paste.here.your.website');
	} else if (commandName === 'info') {
		{
			await interaction.reply('Extra info message:D!');
		}
	}
});

client.login(process.env.TOKEN);