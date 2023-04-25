<template>
    <div class="main">
      <div class="container">
        <div class="main__head">

          <div class="main__last-news">
            <h2 class="main__last-news-title">{{ lastNews.title }}</h2>
            <p
              class="main__last-news-description"
              v-html="lastNews.noteDescription"
            ></p>

            <Nuxt-link
              class="main__last-news-more"
              :to="`/news/${lastNews.id}`"
            >
              Подробнее
            </Nuxt-link>
            <pre>{{ data?.data?.pets.length }}</pre>
            <button @click="onClick">click</button>
          </div>

            <img
              src="~/assets/images/garden.png"
              alt="Лого"
              class="main__pic"
            >

        </div>

        <div class="main__body">
          <MainBlocks
          :items="mainItems"/>
        </div>
      </div>
    </div>
</template>

<script lang="js">
import { useNews } from "~/stores/news";
import { useMain } from '~/stores/mainItems';

definePageMeta({
  layout: "default",
});

export default {
  setup() {
    const storeNews = useNews();
    const storeMain = useMain();
    const lastNews = storeNews.getLastNews();
    const mainItems = storeMain.getMainItems();

    const query = gql`
    query findAll {
      pets {
        id
        name
      }
    }
  `
    let data = ref(0);

    async function onClick (){
      return ( data.value = await useAsyncQuery(query) );
      // return ( data.value++ );
    }
    return {
      storeMain,
      storeNews,
      lastNews,
      mainItems,
      onClick,
      data,
    }
  }
}

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