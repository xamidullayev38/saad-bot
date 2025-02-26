
const TelegramBot = require('node-telegram-bot-api');

const token = "7914932952:AAHXZYiDdpx7BbaUjFehzU_CpXWsrCPm27U";

const bot = new TelegramBot(token, {polling: true});



const obj = {};
const gameOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: "1", 
                    callback_data: "1",
                },
                {
                    text: "2", 
                    callback_data: "2",
                },
                {
                    text: "3", 
                    callback_data: "3",
                },
            ],
            [
                {
                    text: "4", 
                    callback_data: "4",
                },
                {
                    text: "5", 
                    callback_data: "5",
                },
                {
                    text: "6", 
                    callback_data: "6",
                },
            ],
            [
                {
                    text: "7", 
                    callback_data: "7",
                },
                {
                    text: "8", 
                    callback_data: "8",
                },
                {
                    text: "9", 
                    callback_data: "9",
                },
            ],
            [
                {
                    text: "0",
                    callback_data: "0",
                }
            ]
        ]
    }
}


const bootstrap = () => {

    bot.setMyCommands([
        {
            command: '/start',
            description: 'Botni ishga tushirish'
        },
        {
            command: '/info',
            description: "O'zingiz haqingizda ma'lumot"
        },
        {
            command: '/game',
            description: "O'yin o'ynash"
        },
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log(msg);
    
    
        if (text === '/start') {
            bot.sendMessage(chatId, `Assalomu alaykum ${msg.from.first_name} Saadning birinchi botiga kirdingiz!`);
        }
    
        if(text === '/info'){
            await bot.sendSticker(chatId,"https://cdn2.combot.org/sp1cf12c5a11a8cbf16a7d42ef4b5275ec_by_stckrrobot/webp/0xf09f98b6.webp");
            return bot.sendMessage(
                chatId,
                `Sizning username: @${msg.from.username} Sizning ismingiz esa: ${msg.from.first_name}`
            );
        }

        if (text === '/game') {
            await bot.sendMessage(chatId, "Kompyuter 0 dan 9 gacha son o'yladi. Siz o'sha sonni topishga harakt qiling.");

            const randomNum = Math.floor(Math.random() * 10);
            obj[chatId] = randomNum;

            return bot.sendMessage(chatId, "To'g'ri sonni toping",gameOptions)
        }
      });
}
 bootstrap();