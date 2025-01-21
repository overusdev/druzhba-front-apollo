<template>
  <div class="main">
    <div class="container">
      <div class="main__head">
        <div class="main__last-news">
          <p class="main__last-news-title" v-html="newsData.name"></p>
          <span v-if="newsData.mainPageText" class="main__last-news-description" v-html="newsData.mainPageText"/>
          <Nuxt-link class="main__last-news-more" :to="`/news/${newsData.id}`">
            Подробнее
            <MdiIcon
              icon="mdiChevronRight"
              class="main__last-news-icon-right"
            />
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
      mainPageText: '',
      date: '',
    });
    const NEWS = gql`
            query findAll($take: Int!) {
                news(take: $take) {
                  id
                  name
                  theme
                  main_page_text
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
        newsData.value.mainPageText = data.value.news[0].main_page_text;
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
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 36px;
  }

  &__last-news-more {
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    background: #f2f2f2;
    padding: 12px 16px;
    color: #000;
    text-decoration: none;
    border-radius: 6px;

    @include desktop {
      padding: 12px 16px;
      cursor: pointer;
    }
  }
  &__last-news-icon-right {
    margin-left: 4px;
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