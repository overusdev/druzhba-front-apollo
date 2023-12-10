<template>
    <div
        class="update-popup"
    >
        <!-- <input type="text" placeholder="name">
        <input type="text" placeholder="type"> -->
        <input type="text" placeholder="name" v-model="props.name">
        <input type="text" placeholder="type" v-model="props.type">
        <span class="update-popup__close-btn">Close</span>
    </div>
</template>

<script>
export default {
  name: 'UpdatePopup',
  props: {
    item: Array
  },
  setup(props) {
    // const name = '';
    // const type = '';

    // defineEmits("emit");
    return {
        props
        // name,
        // type,
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';
@import '~/assets/styles/variables.scss';

.update-popup {
    padding: 20px;
    background: #fff;
    border: 1px solid;
}
</style>
