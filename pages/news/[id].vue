<template>
    <div class="news-item">
      <div class="container">
        <PageTitle :title="news.title"/>
        <p class="news-item__note-description" v-html="news.noteDescription"
        ></p>
        <p class="news-item__note-description" v-html="news.description"
        ></p>
        <nuxt-img
          v-if="news.imageLink"
          format="webp"
          class="news-item__image"
          :src="`${news.imageLink}`"
        />
      </div>
    </div>
</template>

<script lang="ts">
import { useNews } from "~/stores/news";
import PageTitle from '~/components/page-title/PageTitle.vue';

export default {
  components: { PageTitle },
  setup() {
    const store = useNews();
    const route = useRoute();
    const news = store.getNewsById({ id: route.params.id });

    // onMounted(() => {
    //   console.log("Component is mounted!", route.params.id );

    // });

    return {
      store,
      route,
      news
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .news-item {

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