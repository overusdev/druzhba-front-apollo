<template>
  <div class="ads">
    <div class="container">
      <PageTitle title="Объявления"/>
      <p v-if="!ads.length" class="ads__not-founded">Объявлений пока нет</p>
      <MainBlocks
        inner
        more
        :items="allAds"
        class="ads__items"
      />
    </div>
  </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';

export default {
  components: { PageTitle },
  setup () {
    const adsData = ref({
        name: '',
        theme: '',
        date: '',
    });
    const ADS = gql`
        query findAll($take: Int!) {
            ads(take: $take) {
              id
              name
              theme
              date
            }
        }
    `;
    const { result, loading, error, refetch } = useQuery(ADS, () => ({
        take: 500,
    }));
    const ads = computed(() => result.value?.ads ?? []);
    const allAds = computed(() => { 
        return ads.value.map(function(obj) {
            return {
              'link': `/ads/${obj.id}`,
              'date': obj.date,
              'title': obj.name,
            };
        });
    });

    onMounted(async () => {
        await refetch();
    });

    return {
      result,
      loading,
      adsData,
      error,
      refetch,
      ads,
      PageTitle,
      allAds,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .ads {

    &__not-founded {
      margin: 24px 0;
    }

    &__items {
      margin-top: 32px;
    }
  }
</style>