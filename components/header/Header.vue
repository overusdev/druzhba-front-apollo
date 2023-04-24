<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink
          to="/"
        >
          <div class="header__logo-wrapper">
            <img 
              src="~/assets/images/header/Logo.png"
              alt="Лого"
              class="header__logo"
            >
            <p class="header__logo-note">садовое некоммерческое товарищество</p>
          </div>
        </NuxtLink>
        <div
          class="header__menu"
          :class="{ 'header__menu_active' : store.getActive() }"
          >
          <NuxtLink
            v-for="item in menuItems"
            :key="item"
            :to="item.link"
            class="header__menu-item"
            @click="store.closeMenu()"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <Burger
          :color="'#307526'"
          class="header__burger"
        />
      </div>
    </div>

  </div>
</template>

<script lang="js">
import Burger from '~/components/UI/Burger';
import { useBurger } from "~/stores/burger";

export default {
  components: { Burger },
  setup() {
    const store = useBurger();
    const menuItems = [
      {
        name: 'Новости',
        link: '/news',
      },
      {
        name: 'Документы',
        link: '/docs',
      },
      {
        name: 'Обьявления',
        link: '/ads',
      },
      {
        name: 'Галерея',
        link: '/gallery',
      },
      {
        name: 'Контакты',
        link: '/contacts',
      },
    ];
    return {
      menuItems,
      store
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';
@import '~/assets/styles/variables.scss';
.header {
  &__logo {
    width: 255px;
    height: 60px;
    margin-bottom: 8px;
  }

  &__logo-note {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
  }

  &__wrapper {
    position: relative;
    padding: 40px 0 18px 0;
    border-bottom: 1px solid #000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @include desktop {
      padding: 45px 0 18px 0;
    }
  }

  &__menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 145px;
    background: #fff;
    left: -100%;
    width: 100%;
    padding-top: 30px;
    opacity: 0;
    transition: $transitionDefault;

    &_active {
      left: 0;
      opacity: 1;
    }

    @include desktop {
      position: static;
      width: auto;
      flex-direction: row;
      align-items: center;
      padding-top: 0;
      opacity: 1;
    }
  }

  &__menu-item {
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

  &__burger {
    position: absolute;
    right: 0;
  }
}

.router-link-active {
  color: #307526 !important;
}
</style>