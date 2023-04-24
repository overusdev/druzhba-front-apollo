<template>
  <div class="contacts">
    <div class="container">
      <PageTitle title="Контакты"/>
    </div>
  </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';
import { useNews } from "~/stores/news";

export default {
  components: { PageTitle },
  setup() {
    const store = useNews();
    return {
      store,
      PageTitle
    }
  }
}
</script>