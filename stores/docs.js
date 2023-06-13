export const useDocs = defineStore('docs', () => {
    const docs = [
        {
            id: 1,
            title: 'Банковские реквизиты СНТ "ДРУЖБА"',
            noteDescription: '',
            description: `
            Реквизиты для оплаты:

            <ul class="doc-list">
                <li class="doc-list__item">СНТ "ДРУЖБА"</li>
                <li class="doc-list__item">Расчётный счёт: 40703810142000001866</li>
                <li class="doc-list__item">Банк: ВОЛГО-ВЯТСКИЙ БАНК ПАО СБЕРБАНК</li>
                <li class="doc-list__item">БИК: 042202603</li>
                <li class="doc-list__item">Кор. Cчёт: 30101810900000000603</li>
                <li class="doc-list__item">ОГРН: 1025201075899</li>
                <li class="doc-list__item">ИНН: 5228007926</li>
                <li class="doc-list__item">КПП: 522801001</li>
            </ul>
            `,
            date: '19.05.2022',
            link: '/docs/1'
        },
    ];

    function getLastDoc() {
        return docs.at(-1);
    }

    function getDocsById({id}) {
        return docs.find( item => item.id == id);
    }
  
    return {
        docs,
        getLastDoc,
        getDocsById,
    };
});