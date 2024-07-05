<template>
    <div
        class="main-items"
        :class="{ 'main-items--full' : fullItemsWrapper() }">
        <NuxtLink
            v-for="item in items"
            :key="item.id"
            :to="item.link"
            class="main-items__link"
            :class="itemsClasses"
        >

            <span
                v-if="item.date"
                class="main-items__date--inner">
                {{ item.date }}
            </span>
            <span
                class="main-items__item"
                v-html="item.title"
                :class="{ 'main-items__item--inner' : inner }"
            >
            </span>
            <span
                v-if="more"
                class="main-items__more"
            >
            Подробнее</span>

        </NuxtLink>
    </div>
</template>

<script lang="js">

    export default {
        props: {
            items: {
                type: Array,
                required: true,
            },
            inner: Boolean,
            more: Boolean,
        },
        setup(props) {
            const itemsClasses = computed(() => ({
                'main-items__link--inner' : props.inner,
                'main-items__link--right-indent' : !fullItemsWrapper(),
            }));
            function fullItemsWrapper() {
                return props.items.length > 2;
            }

            return {
                fullItemsWrapper,
                itemsClasses,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/styles/media.scss';
    @import '~/assets/styles/variables.scss';

    .main-items {
        display: flex;
        flex-direction: column;

        @include desktop {
            gap: 24px;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
        }

        &--full {
            @include desktop {
                // justify-content: space-between;
            }
        }

        &__link {
            position: relative;
            text-decoration: none;
            height: 200px;
            color: #fff;
            background: rgba(48, 117, 38, 0.8);
            border: 1px solid #307526;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            text-decoration: none;

            @include desktop {
                width: 350px;
                margin-bottom: 0;
                font-size: 22px;
                line-height: 27px;
                cursor: pointer;
                transition: $transitionDefault;

                &:hover {
                    transform: scale(1.1);
                    background: #fff;
                    font-weight: 700;
                    color: #307526;
                }
            }

            &--inner {
                display: block;
                text-align: left;
                width: 100%;
                @include desktop {
                    width: 350px;
                }
            }
            &--right-indent {
                @include desktop {
                    margin-right: 24px;
                }
            }
        }

        &__date--inner {
            position: absolute;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            top: 24px;
            left: 36px;

            @include desktop {
                top: 24px;
                left: 36px;
            }

        }

        &__item {

            &--inner {
                position: absolute;
                font-weight: 400;
                font-weight: 700;
                font-size: 20px;
                line-height: 24px;
                text-transform: none;
                top: 64px;
                    left: 36px;

                @include desktop {
                    top: 64px;
                    left: 36px;
                }
            }
        }
        &__more {
            position: absolute;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            left: 36px;
            bottom: 24px;
        }
    }

</style>