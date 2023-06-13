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
    const storeDocs = useDocs();
    const allDocs = storeDocs.docs.reverse();
    return {
      PageTitle,
      allDocs
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
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 30px;
      text-decoration: none;
      color: #000;

      &:visited {
        color: #000;
      }

      @include desktop {
        margin-left: 16px;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 0;
        cursor: pointer;
        transition: $transitionDefault;

        &:hover {
          color: #307526;
        }
      }
    }
  }
</style>