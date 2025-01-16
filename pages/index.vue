<template>
  <div class="main">
    <div class="container">
      <div class="main__head">
        <div class="main__last-news">
          <p class="main__last-news-title" v-html="newsData.name"></p>
          <span v-if="newsData.theme" class="main__last-news-description" v-html="newsData.theme"/>
          <Nuxt-link class="main__last-news-more" :to="`/news/${newsData.id}`">
            Подробнее
          </Nuxt-link>
        </div>

        <img src="~/assets/images/garden.png" alt="Лого" class="main__pic">
      </div>

      <div class="main__body">
        <MainBlocks :items="mainItems" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMain } from '~/stores/mainItems';
import gql from 'graphql-tag';

    definePageMeta({
      layout: "default",
    });

    const storeMain = useMain();
    const mainItems = storeMain.getMainItems();
    const newsData = ref({
      id: '',
      name: '',
      theme: '',
      date: '',
    });
    const NEWS = gql`
            query findAll($take: Int!) {
                news(take: $take) {
                  id
                  name
                  theme
                  date
                }
            }
        `;
    async function initPets() {
      const { data } = await useAsyncQuery(NEWS, { take: 500 });

      if (data?.value?.news) {
        newsData.value.id = data.value.news[0].id;
        newsData.value.name = data.value.news[0].name;
        newsData.value.theme = data.value.news[0].theme;
        newsData.value.date = data.value.news[0].date;
      }
    }

    await initPets();
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

.main {
  &__head {
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    @include desktop {
      margin: 44px 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

  }

  &__last-news {
    margin-bottom: 16px;

    @include desktop {
      max-width: 410px;
      padding: 0;
      margin-bottom: 0;
    }
  }

  &__last-news-title {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #307526;
    margin-bottom: 17px;
  }

  &__last-news-description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 36px;
  }

  &__last-news-more {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    background: #307526;
    text-transform: uppercase;
    padding: 12px;
    color: #fff;

    @include desktop {
      padding: 5px 10px;
      cursor: pointer;
    }
  }

  &__pic {
    width: 100%;

    @include desktop {
      width: 531px;
      height: 344px;
    }
  }

  &__body {
    margin-bottom: 36px;
  }

}
</style>