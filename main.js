import { Telegraf, Markup } from 'telegraf';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'bot.env' });

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('Error: TELEGRAM_BOT_TOKEN is not defined.');
    process.exit(1);
}

const bot = new Telegraf(token);

// Обработчик команды /start
bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать, начинаем работать!',
        Markup.keyboard([
            [
                Markup.button.text('Поддержка'),
                Markup.button.text('Сведения'),
            ],
        ])
        .resize() // Уменьшаем размер кнопок
    );
});

// Обработка нажатия на кнопку "Поддержка"
bot.hears('Поддержка', (ctx) => {
    ctx.reply('Для связи с разработчиками:\n info@digital-innovator');
});

// Обработка нажатия на кнопку "Сведения"
bot.hears('Сведения', (ctx) => {
    ctx.reply('Вы можете обращаться за помощью в любое время!');
});

// Добавление команды /info
bot.command('info', (ctx) => {
    ctx.reply(
        'Ключевые моменты работы бота:\n\n' +
        '1. **Удобный набор кадров**: Бот создан для упрощения процесса подбора персонала.\n\n' +
        '2. **Загрузка резюме**: Пользователи могут загружать свои резюме на интересующие вакансии.\n\n' +
        '3. **Поддержка пользователей**: Вы всегда можете обратиться за помощью, написав на адрес info@digital-innovator.\n\n' +
        '4. **Сбор статистики**: Бот помогает HR-менеджерам оценить кандидатов и упростить процесс раскрытия вакансий.\n\n' +
        '5. **Безопасность данных**: Все данные, передаваемые через бот, защищены и используются исключительно в рамках работы с вакансиями.'
    );
});

bot.launch();