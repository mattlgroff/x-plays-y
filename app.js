require('dotenv').config()
const ks = require('node-key-sender')
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
  ks.sendKey('a')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// b = b
bot.hears('b', (ctx) => {
  ks.sendKey('b')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// up = up
bot.hears('up', (ctx) => {
  ks.sendKey('up')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// down = down
bot.hears('down', (ctx) => {
  ks.sendKey('down')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// left = left
bot.hears('left', (ctx) => {
  ks.sendKey('left')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// right = right
bot.hears('right', (ctx) => {
  ks.sendKey('right')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// start = c
bot.hears('start', (ctx) => {
  ks.sendKey('c')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// select = d
bot.hears('select', (ctx) => {
  ks.sendKey('d')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// l = l
bot.hears('l', (ctx) => {
  ks.sendKey('l')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// r = r
bot.hears('r', (ctx) => {
  ks.sendKey('r')
    .then(res => {
      ctx.reply(`Sent the command: ${ctx.update.message.text}`)
      console.log(ctx.update.message.from.username + ': ' + ctx.update.message.text)
    })
    .catch(err => {
      console.error(err)
      ctx.reply(`Something went wrong sending ${ctx.update.message.text}`)
    })
})

// Start Bot
bot.startPolling()

