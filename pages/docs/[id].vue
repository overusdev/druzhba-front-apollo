<template>
    <div class="docs-item">
      <div class="container">
        <!-- <PageTitle :title="doc.title"/>
        <p 
            v-if="doc.noteDescription"
            class="docs-item__note-description"
            v-html="doc.noteDescription"
        ></p>
        <p
            v-if="doc.description"
            class="docs-item__note-description"
            v-html="doc.description"
        ></p> -->
        <PageTitle :title="docsData.title"/>
        <p class="news-item__note-description" v-html="docsData.theme"
        ></p>

      </div>
    </div>
</template>

<script lang="js">
import { useDocs } from "~/stores/docs";
import PageTitle from '~/components/page-title/PageTitle.vue';

export default {
  components: { PageTitle },
  setup() {
    const router = useRouter();
    const route = useRoute();
    // const news = store.getNewsById({ id: route.params.id });
    const docsData = reactive({
        title: '',
        theme: '',
    });
    const DOCS = gql`
        query findOne($id: Int!) {
            doc(id: $id) {
              id
              title
              theme
            }
        }
    `;
    const { result, loading, error, refetch } = useQuery(DOCS, () => ({
        id: Number(route.params.id),
    }));
    const docs = computed(() => result ?? {});

    onMounted(async () => {
        const refetchQuery = await refetch();
        if(refetchQuery.data.doc) {
            docsData.id = refetchQuery.data.doc.id;
            docsData.title = refetchQuery.data.doc.title;
            docsData.theme = refetchQuery.data.doc.theme;
        }
    });

      return {
          docsData,
          result,
          loading,
          refetch,
          router,
          route,
          docs,
          PageTitle,
      }
    // const store = useDocs();
    // const route = useRoute();
    // const doc = store.getDocsById({ id: route.params.id });

    // return {
    //   store,
    //   route,
    //   doc
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .docs-item {

    &__note-description {
      margin-top: 24px;
      line-height: 1.8;
    }

    &__image {
      width: 100%;
      height: auto;
    }
  }
</style>