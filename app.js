const robot = require('robotjs')
require('dotenv').config()
const Telegraf  = require('telegraf')
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

// Runs on start for a new user.
bot.start((ctx) => {
  console.log('started:', ctx.from.id);
  return ctx.reply(`Welcome to X Plays Pokemon! Type /commands for inputs.`)
})

// List of commands
bot.command('commands', (ctx) => ctx.reply('Valid Inputs: a, b, start, select, L and R.'));

// a = a
bot.hears('a', (ctx) => {
  ctx.reply('Sent the command: a')
  robot.keyTap('a')
})

// A = a
bot.hears('A', (ctx) => {
  ctx.reply('Sent the command: a')
  robot.keyTap('a')
})

// b = b
bot.hears('b', (ctx) => {
  ctx.reply('Sent the command: b')
  robot.keyTap('b')
})

// B = b
bot.hears('B', (ctx) => {
  ctx.reply('Sent the command: b')
  robot.keyTap('b')
})

// start = c
bot.hears('start', (ctx) => {
  ctx.reply('Sent the command: start')
  robot.keyTap('c')
})

// Start = c
bot.hears('Start', (ctx) => {
  ctx.reply('Sent the command: start')
  robot.keyTap('c')
})

// select = d
bot.hears('select', (ctx) => {
  ctx.reply('Sent the command: select')
  robot.keyTap('d')
})

// Select = d
bot.hears('Select', (ctx) => {
  ctx.reply('Sent the command: select')
  robot.keyTap('d')
})

// L = l
bot.hears('L', (ctx) => {
  ctx.reply('Sent the command: L')
  robot.keyTap('l')
})

// l = l
bot.hears('l', (ctx) => {
  ctx.reply('Sent the command: L')
  robot.keyTap('l')
})

// R = r
bot.hears('R', (ctx) => {
  ctx.reply('Sent the command: R')
  robot.keyTap('r')
})

// r = r
bot.hears('r', (ctx) => {
  ctx.reply('Sent the command: R')
  robot.keyTap('r')
})

// Start Bot
bot.startPolling()

