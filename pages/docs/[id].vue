<template>
    <div class="docs-item">
      <div class="container">
        <PageTitle :title="doc.title"/>
        <p 
            v-if="doc.noteDescription"
            class="docs-item__note-description"
            v-html="doc.noteDescription"
        ></p>
        <p
            v-if="doc.description"
            class="docs-item__note-description"
            v-html="doc.description"
        ></p>

      </div>
    </div>
</template>

<script lang="ts">
import { useDocs } from "~/stores/docs";
import PageTitle from '~/components/page-title/PageTitle.vue';

export default {
  components: { PageTitle },
  setup() {
    const store = useDocs();
    const route = useRoute();
    const doc = store.getDocsById({ id: route.params.id });

    return {
      store,
      route,
      doc
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .docs-item {

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