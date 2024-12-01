import { Telegraf, Markup } from 'telegraf'
import * as dotenv from 'dotenv';

dotenv.config({ path: 'bot.env' });

const token = process.env.TELEGRAM_BOT_TOKEN;
const webAppUrl = process.env.WEB_APP_URL;

if (!token) {
    console.error('Error: TELEGRAM_BOT_TOKEN is not defined.');
    process.exit(1);
}

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать, начинаем работать!',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить ообщение',
                webAppUrl
            )
        ])
    )
})

bot.launch()