<template>
    <div class="news-item">
      <div class="container">
        <!-- <PageTitle :title="news.title"/> -->
        <!-- <p class="news-item__note-description" v-html="news.noteDescription"
        ></p>
        <p class="news-item__note-description" v-html="news.description"></p> -->
        <PageTitle :title="newsData.name"/>
        <p class="news-item__note-description" v-html="newsData.theme"
        ></p>
      </div>
    </div>
</template>

<script lang="js">
import { useNews } from "~/stores/news";
import PageTitle from '~/components/page-title/PageTitle.vue';

export default {
  setup () {
    const store = useNews();
    const router = useRouter();
    const route = useRoute();
    // const news = store.getNewsById({ id: route.params.id });
    const newsData = reactive({
        name: '',
        theme: '',
    });
    const NEWS = gql`
        query findOne($id: Int!) {
            new(id: $id) {
              id
              name
              theme
            }
        }
    `;
    const { result, loading, error, refetch } = useQuery(NEWS, () => ({
        id: Number(route.params.id),
    }));
    const news = computed(() => result ?? {});

    onMounted(async () => {
        const refetchQuery = await refetch();
        if(refetchQuery.data.new) {
            newsData.id = refetchQuery.data.new.id;
            newsData.name = refetchQuery.data.new.name;
            newsData.theme = refetchQuery.data.new.theme;
        }
    });

      return {
          newsData,
          result,
          loading,
          refetch,
          router,
          route,
          news,
          PageTitle,
      }
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .news-item {

    &__note-description {
      margin-top: 24px;
      line-height: 1.8;
      strong {
        font-weight: bold !important;
      }

      :deep(img) {
        width: 100%;
        height: auto;
      }
    }

    &__image {
      width: 100%;
      height: auto;
    }
  }

  strong {
    font-weight: bold !important;
  }
</style>