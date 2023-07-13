<template>
    <div class="ads-item">
      <div class="container">
        <PageTitle :title="ads.title"/>
        <p class="ads-item__note-description" v-html="ads.noteDescription"
        ></p>
        <p class="ads-item__note-description" v-html="ads.description"
        ></p>
        <nuxt-img :src="`/${ads.imageLink}`" class="ads-item__image" />
      </div>
    </div>
</template>

<script lang="ts">
import { useAds } from "~/stores/ads";
import PageTitle from '~/components/page-title/PageTitle.vue';

export default {
  components: { PageTitle },
  setup() {
    const store = useAds();
    const route = useRoute();
    const ads = store.getAdsById({ id: route.params.id });

    return {
      store,
      route,
      ads
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .ads-item {

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