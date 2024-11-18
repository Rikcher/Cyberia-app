const getAreaData = (araeaName: string | null) => {
    switch (araeaName) {
        case "hover_Mountainous_Desert":
            return {
                title: "Лендинги, промо-сайты",
                description: "Изучим вашу целевую аудиторию и определим цели, которые вы хотите достичь с помощью лендинга",
                price: "от 50 000 ₽ / 1 нед"
            };
        case "hover_Giant_Wall":
            return {
                title: "Сайты-визитки",
                description: "Создадим функциональный и отзывчивый сайт, который работает на всех устройствах и браузерах",
                price: "от 100 000 ₽ / 2 нед"
            };
        case "hover_Flat_Desert":
            return {
                title: "Корпоративные сайты",
                description: "Разработаем уникальный дизайн, который отражает вашу компанию и уделим внимание удобству использования",
                price: "от 150 000 ₽ / 2 нед"
            };
        case "hover_Mountains":
            return {
                title: "Интернет-магазины",
                description: "Разработаем интернет-магазин с продуманной логикой, удобным интерфейсом и необходимыми интеграциями",
                price: "от 200 000 ₽ / 1 мес"
            };
        case "hover_Terra_District":
            return {
                title: "CRM, ERP системы",
                description: "Реализуем удобную и функциональную систему для коммуникации с клиентами, управления складом и производством под ваши задачи",
                price: "от 300 000 ₽ / 1 мес"
            };
        case "hover_Greenvale_Remnants":
            return {
                title: "E-learning проекты",
                description: "Воплотим любую вашу идею о дистанционном образовании при помощи грамотно подобранных технических решений",
                price: "от 300 000 ₽ / 2 мес"
            };
        case "hover_Floating_Obelisk":
            return {
                title: "Системы ЭДО",
                description: "Подберем удобный для вас вариант системы электронного документооборота, разработаем и поможем с плавным переходом компании на него",
                price: "от 400 000 ₽ / 3 мес"
            };
        case "hover_Monolith_District":
            return {
                title: "Системы автоматизации",
                description: "Разработаем систему для автоматизации бизнес-процессов под ваши задачи и цели",
                price: "от 500 000 ₽ / 3 мес"
            };
        case "hover_Frost_Plateau":
            return {
                title: "Предоставляем Frontend-разработчиков для усиления IT-команды",
                description: "HTML, CSS/SCSS, Javascript, Typescript, React.js, Next.js, Vue.js, Nuxt.js, Webpack, Gulp, Websockets",
                price: "от 1500 ₽/ч"
            };
        case "hover_Snow_Mountains":
            return {
                title: "Предоставляем Backend-разработчиков для усиления IT-команды",
                description: "PHP, Yii2, Laravel, Go, MySQL, PostgreSQL, Clickhouse, Redis, RabbitMQ, Docker",
                price: "от 1500 ₽/ч"
            };
        case "hover_Forest":
            return {
                title: "Предоставляем Дизайнера для усиления IT-команды",
                description: "веб-сайты, мобильные приложения, брендинг",
                price: "от 1200 ₽/ч"
            };
        default:
            return {
                title: "Заказная разработка под ключ",
                description: "Полный цикл создания новых IT-проектов, а также модернизация существующих: от предпроектных исследований до ввода в эксплуатацию и поддержки",
                price: null
            }
    }
}

export default getAreaData