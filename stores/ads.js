export const useAds = defineStore('ads', () => {
    const ads = [
        {
            id: 1,
            title: 'Тарифы',
            noteDescription: '',
            description: '',
            date: '13.06.2023',
            link: '/ads/1',
            imageLink: 'tariffs.png',
        },
    ];

    function getLastAds() {
        return ads.at(-1);
    }

    function getAdsById({id}) {
        return ads.find( item => item.id == id );
    }
  
    return {
        ads,
        getLastAds,
        getAdsById,
    };
});