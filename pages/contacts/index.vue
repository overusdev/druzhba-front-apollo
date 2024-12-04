<template>
  <div class="contacts">
    <div class="container">
      <PageTitle title="Контакты" class="contacts__page-title"/>
        <p class="news-item__note-description" v-html="contactsData.theme"
        ></p>
      <client-only>
        <!-- <p class="contacts__title">Схема СНТ Дружба</p>
        <img src="~/assets/images/contacts/contacts_sсheme.png"
          alt="Схема СНТ Дружба"
          class="contacts__scheme"
        >
        <p class="contacts__title">Ортофотоплан СНТ Дружба</p>
        <img src="~/assets/images/contacts/ortophotoplan.png"
          alt="Оотофотоплан СНТ Дружба"
          class="contacts__scheme"
        > -->
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
import { computed, reactive, onMounted } from 'vue';
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
    const contactsData = reactive({
        theme: '',
    });
    const CONTACTS = gql`
        query findOne($id: Int!) {
            contact(id: $id) {
                id
                theme
            }
        }
    `;
    const { result, loading, error, refetch } = useQuery(CONTACTS, () => ({
        id: 1,
    }));
    const contacts = computed(() => result ?? {});

    onMounted(async () => {
        const refetchQuery = await refetch();
        if(refetchQuery.data.contact) {
            contactsData.theme = refetchQuery.data.contact.theme;
        }
    });
    return {
      store,
      PageTitle,
      coordinates,
      controls,
      detailedControls,
      
      contactsData,
      result,
      loading,
      refetch,
      contacts,
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
    margin-bottom: 32px;
  }

  &__title {
    font-weight: bold;
    margin-bottom: 24px;
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