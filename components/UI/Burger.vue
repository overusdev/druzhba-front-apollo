<template>
    <div
        class="burger"
        :class="{'burger_state_active' : store.getActive() }"
        @click="toggleBurger"
    >
        <span class="burger__line burger__line_top"></span>
        <span class="burger__line burger__line_middle"></span>
        <span class="burger__line burger__line_bottom"></span>
    </div>
</template>

<script>
import { useBurger } from "~/stores/burger";
export default {
  name: 'Burger',
  props: {
    color: String
  },
  setup(props) {
    const store = useBurger();

    function toggleBurger() {
        store.toggleMenu();
    }

    return {
      store,
      toggleBurger
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';
@import '~/assets/styles/variables.scss';
    .burger {
        position: relative;
        height: 28px;
        width: 42px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // transition: .8s all ease-in-out;
        transition: $transitionDefault;

        &_state {
            &_active {

                .burger__line_top {
                    transform: rotate(45deg) translate(0, -3px);
                }

                .burger__line_middle {
                    opacity: 0;
                }

                .burger__line_bottom {
                    transform: rotate(-45deg) translate(0, -3px);
                }

            }
        }

        &__line {
            // transition: .3s all ease-in-out;
            transition: $transitionDefault;
            background: #307526;
            height: 5px;
            transform-origin: 4px 0px;
            transition: transform 0.1s cubic-bezier(0.77,0.2,0.05,1.0),
                        background 0.1s cubic-bezier(0.77,0.2,0.05,1.0),
                        opacity 0.5s ease;
        }

        @include desktop {
            display: none;
        }
    }
</style>
