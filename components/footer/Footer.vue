<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__item">© СНТ «ДРУЖБА»</div>
        <div class="footer__item">ст. Кеза Семеновский район <br> Нижегородской области</div>
        <div class="footer__item">2022</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   layout: false,
// });
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .footer {
    background: #fff;
    margin-top: 40px;

    @include desktop {
      // position: fixed;
      // bottom: 0;
      width: 100%;
      margin-top: 0;
    }

    &__wrapper {
      border-top: 1px solid #000;
      padding: 27px 0;

      @include desktop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 142px;
      }
    }

    &__item {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      margin-bottom: 20px;

      @include desktop {
        margin-bottom: 0;
      }
    }
  }
</style>