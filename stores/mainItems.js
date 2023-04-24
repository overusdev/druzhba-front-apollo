export const useMain = defineStore('main', () => {
    const mainItems = [

        {
            id: 0,
            title: 'ONLINE<br> ГОЛОСОВАНИЕ',
            noteDescription: '3',
            description: '3',
            link: '/online-votes'
        },
        {
            id: 1,
            title: 'ОПЛАТИТЬ<br> ЭЛЕКТРОЭНЕРГИЮ/<br>ЦЕЛЕВЫЕ<br> ВЗНОСЫ',
            noteDescription: '3',
            description: '3',
            link: '/el-pay'
        },
        {
            id: 2,
            title: 'ОТПРАВИТЬ<br> ЖАЛОБУ<br> ИЛИ<br> ПРЕДЛОЖЕНИЕ<br> В ПРАВЛЕНИЕ',
            noteDescription: '2',
            description: '',
            link: '/feedback'
        },
    ];

    function getMainItems() {
        return mainItems;
    }

    function getLastMainItem() {
        return mainItems[0];
    }

    function getMainItemById({id}) {
        return mainItems.find( item => item.id == id);
    }
  
    return {
        mainItems,
        getLastMainItem,
        getMainItemById,
        getMainItems
    };
});