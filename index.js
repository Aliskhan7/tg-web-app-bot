const TelegramBot = require('node-telegram-bot-api');

const token = '7869608758:AAG1XY_1Md3MzoFBcG-uK56wSt8zs1Z656s'

const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text=== '/start'){
        await bot.sendMessage(chatId, 'Ниже появится кнопка, заполните форму', {
            reply_markup: {
                keyboard: [
                    [{text: 'Заполнить форму'}]
                ]
            }
        })
    }

});