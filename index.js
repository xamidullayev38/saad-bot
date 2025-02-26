
const TelegramBot = require('node-telegram-bot-api');

const token = "7914932952:AAHXZYiDdpx7BbaUjFehzU_CpXWsrCPm27U";

const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
    {
        command: '/start',
        description: 'Botni ishga tushirish'
    },
    {
        command: '/info',
        description: "O'zingiz haqingizda ma'lumot"
    },
])


bot.on('message', (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg);


    if (text === '/start') {
        bot.sendMessage(chatId, `Assalomu alaykum ${msg.from.first_name} Saadning birinchi botiga kirdingiz!`);
    }

    if(text === '/info'){
        bot.sendSticker(chatId,"https://cdn2.combot.org/sp1cf12c5a11a8cbf16a7d42ef4b5275ec_by_stckrrobot/webp/0xf09f98b6.webp");
        return bot.sendMessage(
            chatId,
            `Sizning username: @${msg.from.username} Sizning ismingiz esa: ${msg.from.first_name}`
        );
    }
  });