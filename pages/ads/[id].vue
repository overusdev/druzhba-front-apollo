<template>
    <div class="ads-item">
      <div class="container">
        <PageTitle :title="adData.name"/>
        <p class="ads-item__note-description" v-html="adData.theme"
        ></p>
      </div>
    </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle.vue';

export default {
  setup () {
    const router = useRouter();
    const route = useRoute();
    const adData = reactive({
        name: '',
        theme: '',
    });
    const AD = gql`
        query findOne($id: Int!) {
            ad(id: $id) {
              id
              name
              theme
            }
        }
    `;
    const { result, loading, error, refetch } = useQuery(AD, () => ({
        id: Number(route.params.id),
    }));
    const ad = computed(() => result ?? {});

    onMounted(async () => {
        const refetchQuery = await refetch();
        if(refetchQuery.data.ad) {
            adData.id = refetchQuery.data.ad.id;
            adData.name = refetchQuery.data.ad.name;
            adData.theme = refetchQuery.data.ad.theme;
        }
    });

        return {
            adData,
            result,
            loading,
            refetch,
            router,
            route,
            ad,
            PageTitle,
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .ads-item {

    &__note-description {
      margin-top: 24px;
      line-height: 1.8;

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
</style>