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
  setup() {
    const storeNews = useNews();
    const allNews = storeNews.news;
    return {
      PageTitle,
      allNews
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