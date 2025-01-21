<template>
  <div class="docs">
    <div class="container">
      <PageTitle title="Документы"/>
      <div class="docs__item-wrapper">
        <template v-if="result.docs.length">
            <NuxtLink
                v-for="item in result.docs"
                :key="item.id"
                :to="`/docs/${item.id}`"
                class="docs__item-link"
            >
                {{ item.title }}
            </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';

export default {
  components: { PageTitle },
  setup() {
    const DOCS = gql`
        query findAll($take: Int!) {
            docs(take: $take) {
              id
              title
              theme
              date
              updated
            }
        }
    `;
    const { result } = useQuery(DOCS, () => ({
        take: 500,
    }));

    return {
      result,
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
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 30px;
      text-decoration: none;
      color: #000;
      padding-left: 12px;

      &:visited {
        color: #000;
      }

      @include desktop {
        margin-left: 16px;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 16px;
        cursor: pointer;
        transition: $transitionDefault;

        &:hover {
          color: #307526;
        }
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 6px;
        height: 6px;
        background-color: #000;
        border-radius: 50%;
      }
    }
  }
</style>