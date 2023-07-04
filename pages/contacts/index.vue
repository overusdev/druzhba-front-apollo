<template>
  <div class="contacts">
    <div class="container">
      <PageTitle title="Контакты" class="contacts__page-title"/>
      <client-only>
        <img src="~/assets/images/contacts/contacts_sсheme.png"
          alt="Схема СНТ Дружба"
          class="contacts__scheme"
        >
        <!-- <YandexMap
          :coordinates="coordinates"
          :detailed-controls="detailedControls"
          marker-id="index"
          map-type="map"
          zoom="15"
          type="Point"
        /> -->
      </client-only>
    </div>
  </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';
import { useNews } from "~/stores/news";
import { YandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  components: { PageTitle },
  setup() {
    const store = useNews();
    const coordinates = [56.645999, 44.168635];
    const controls = ['fullscreenControl'];
    const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
    return {
      store,
      PageTitle,
      coordinates,
      controls,
      detailedControls,
    }
  }
}
</script>

<style lang="scss" scoped>

.contacts {
  &__page-title {
    margin-bottom: 24px;
  }

  &__scheme {
    width: 100%;
  }
}
.yandex-container {
  height: 400px;
}

.yandex-balloon {
  height: 200px;
  width: 200px;
}
</style>