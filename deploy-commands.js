//Dependencies

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { colors } = require('colors');
require('dotenv').config();

// SlashCommands registration
// add another line for more commands
const commands = [
	new SlashCommandBuilder().setName('web').setDescription('Reply a website link'),
	new SlashCommandBuilder().setName('info').setDescription('Extra information about us'),
	new SlashCommandBuilder().setName('embed').setDescription('Send a test embed.')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID), { body: commands })
	.then(() => console.log('Successfully registered commands now execute index.js'.green))
	.catch(console.error);
