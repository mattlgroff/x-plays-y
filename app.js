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
bot.command('commands', (ctx) => ctx.reply('Valid Inputs: a, b, up, down, left, right, start, select, l and r.'));

// a = a
bot.hears('a', (ctx) => {
  ctx.reply('Sent the command: a')
  robot.keyTap('a')
})

// b = b
bot.hears('b', (ctx) => {
  ctx.reply('Sent the command: b')
  robot.keyTap('b')
})

// up = up
bot.hears('up', (ctx) => {
  ctx.reply('Sent the command: up')
  robot.keyTap('up')
})

// down = down
bot.hears('down', (ctx) => {
  ctx.reply('Sent the command: down')
  robot.keyTap('down')
})

// left = left
bot.hears('left', (ctx) => {
  ctx.reply('Sent the command: left')
  robot.keyTap('left')
})

// right = right
bot.hears('right', (ctx) => {
  ctx.reply('Sent the command: right')
  robot.keyTap('right')
})

// start = c
bot.hears('start', (ctx) => {
  ctx.reply('Sent the command: start')
  robot.keyTap('c')
})

// select = d
bot.hears('select', (ctx) => {
  ctx.reply('Sent the command: select')
  robot.keyTap('d')
})

// l = l
bot.hears('l', (ctx) => {
  ctx.reply('Sent the command: L')
  robot.keyTap('l')
})

// r = r
bot.hears('r', (ctx) => {
  ctx.reply('Sent the command: R')
  robot.keyTap('r')
})

// Start Bot
bot.startPolling()

