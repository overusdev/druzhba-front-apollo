<template>
  <div class="docs">
    <div class="container">
      <PageTitle title="Документы"/>
      <div class="docs__item-wrapper">
        <NuxtLink
            v-for="item in allDocs"
            :key="item.id"
            :to="item.link"
            class="docs__item-link"
            v-html="item.title"
        >
      </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';
import { useDocs } from "~/stores/docs";

export default {
  components: { PageTitle },
  setup() {
    // const storeDocs = useDocs();
    // const allDocs = storeDocs.docs.reverse();
    // return {
    //   PageTitle,
    //   allDocs
    // }
    // const allNews = storeNews.news.reverse();
    const docsData = ref({
        name: '',
        theme: '',
        date: '',
    });
    const DOCS = gql`
        query findAll($take: Int!) {
            docs(take: $take) {
              id
              title
              theme
              date
              updated
            }
        }
    `;
    const { result, loading, error, refetch } = useQuery(DOCS, () => ({
        take: 500,
    }));
    const docs = computed(() => result.value?.docs ?? []);
    const allDocs = computed(() => { 
        return docs.value.map(function(obj) {
            return {
              'link': `/docs/${obj.id}`,
              'date': obj.date,
              'title': obj.title,
              'theme': obj.theme,
              'updated': obj.updated,
            };
        });
    });

    onMounted(async () => {
        await refetch();
    });

    return {
      result,
      loading,
      docsData,
      error,
      refetch,
      docs,
      PageTitle,
      allDocs,
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~/assets/styles/media.scss';
@import '~/assets/styles/variables.scss';

  .docs {
    &__item-wrapper {
      margin-top: 24px;
    }

    &__item-link {
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 30px;
      text-decoration: none;
      color: #000;
      padding-left: 12px;

      &:visited {
        color: #000;
      }

      @include desktop {
        margin-left: 16px;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 16px;
        cursor: pointer;
        transition: $transitionDefault;

        &:hover {
          color: #307526;
        }
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 6px;
        height: 6px;
        background-color: #000;
        border-radius: 50%;
      }
    }
  }
</style>