export const useNews = defineStore('news', () => {
    const news = [
        {
            id: 0,
            title: 'График работы казначея',
            noteDescription: 'С 01.06.2022 г в доме правления (уч. 217) начнет работать казначей по графику:<br> Суббота с 11 до 13<br>Воскресенье с 11 до 13.',
            description: '',
            date: '19.05.2022',
            link: '/news/0'
        },
        {
            id: 1,
            title: 'Тарифы на<br> электроэнергию',
            noteDescription: '2',
            description: '2',
            date: '20.05.2022',
            link: '/news/1'
        },
        {
            id: 2,
            title: 'Докупаем пульты<br> на ворота',
            noteDescription: '3',
            description: '3',
            date: '21.05.2022',
            link: '/news/2'
        },
    ];

    function getLastNews() {
        return news[0];
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