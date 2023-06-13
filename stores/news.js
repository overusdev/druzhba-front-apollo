export const useNews = defineStore('news', () => {
    const news = [
        {
            id: 1,
            title: 'График работы казначея',
            noteDescription: 'С 01.06.2022 г в доме правления (уч. 217) начнет работать казначей по графику:<br> Суббота с 11 до 13<br>Воскресенье с 11 до 13.',
            description: '',
            date: '19.05.2022',
            link: '/news/1'
        },
        // {
        //     id: 2,
        //     title: 'Тарифы на<br> электроэнергию',
        //     noteDescription: '2',
        //     description: '2',
        //     date: '20.05.2022',
        //     link: '/news/1'
        // },
        // {
        //     id: 2,
        //     title: 'Докупаем пульты<br> на ворота',
        //     noteDescription: '3',
        //     description: '3',
        //     date: '21.05.2022',
        //     link: '/news/2'
        // },
        {
            id: 4,
            title: 'Прием председателя',
            noteDescription: 'Прием председателя  будет 17.06.2023г (суббота) с 13-00 до 14-00 (уч.217).',
            description: `Объявление!
            Прием председателя  будет 17.06.2023г (суббота) с 13-00 до 14-00 (уч.217).
            По вопросам:
            <ul class="news-list">
                <li class="news-list__item">Предоставление копий правоустанавливающих документов  (свидетельства, выписки из ЕГРН)  в Правление</li>
                <li class="news-list__item">Получение членской книжки или ее обновление.</li>
            </ul>
            Реквизиты для оплаты:

            <ul class="news-list">
                <li class="news-list__item">СНТ "ДРУЖБА"</li>
                <li class="news-list__item">Расчётный счёт: 40703810142000001866</li>
                <li class="news-list__item">Банк: ВОЛГО-ВЯТСКИЙ БАНК ПАО СБЕРБАНК</li>
                <li class="news-list__item">БИК: 042202603</li>
                <li class="news-list__item">Кор. Cчёт: 30101810900000000603</li>
                <li class="news-list__item">ОГРН: 1025201075899</li>
                <li class="news-list__item">ИНН: 5228007926</li>
                <li class="news-list__item">КПП: 522801001</li>
            </ul>
            `
            ,
            date: '13.06.2022',
            link: '/news/4',
            imageLink: 'dr_tns.jpg',
        },
    ];

    function getLastNews() {
        return news.at(-1);
    }

    function getNewsById({id}) {
        return news.find( item => item.id == id);
    }
  
    return {
        news,
        getLastNews,
        getNewsById,
        // getAllNews,
    };
});