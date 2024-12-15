<template>
  <div class="news">
    <div class="container">
      <PageTitle title="Новости СНТ"/>
      <div class="news__item-wrapper">
        <div class="news__header">
            <img
              src="~/assets/images/garden.png"
              alt="Лого"
              class="news__pic"
            >
        </div>
          <MainBlocks
            inner
            more
            :items="allNews"/>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';
import { useNews } from "~/stores/news";

export default {
  components: { PageTitle },
  setup () {
    const storeNews = useNews();
    const allNews = storeNews.news.reverse();
    // const newsData = ref({
    //     name: '',
    //     theme: '',
    //     date: '',
    // });
    // const NEWS = gql`
    //     query findAll($take: Int!) {
    //         news(take: $take) {
    //           id
    //           name
    //           theme
    //           date
    //         }
    //     }
    // `;
    // const { result, loading, error, refetch } = useQuery(NEWS, () => ({
    //     take: 500,
    // }));
    // const news = computed(() => result.value?.news ?? []);
    // const allNews = computed(() => { 
    //     return news.value.map(function(obj) {
    //         return {
    //           'link': `/news/${obj.id}`,
    //           'date': obj.date,
    //           'title': obj.name,
    //         };
    //     });
    // });

    // onMounted(async () => {
    //     await refetch();
    // });

    return {
      // result,
      // loading,
      // newsData,
      // error,
      // refetch,
      // news,
      PageTitle,
      allNews,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/media.scss';
  @import '~/assets/styles/variables.scss';

  .news {
    &__header {
      margin: 48px 0;
      display: flex;
      justify-content: flex-start;
    }

    &__pic {
      width: 100%;

      @include desktop {
          width: 273px;
          height: 177px;
      }
    }
  }

</style>