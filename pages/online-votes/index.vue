<template>
    <div class="online-votes">
      <div class="container">
        <PageTitle title="Раздел находится в разработке"/>
        <BackLink/>
      </div>
    </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';
import BackLink from '~/components/back-link/BackLink';

definePageMeta({
  title: 'Some Page'
})

export default {
    components: {
        PageTitle,
        BackLink
    },
}
</script>