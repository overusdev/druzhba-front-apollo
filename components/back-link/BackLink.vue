<template>
    <div class="back">
        <NuxtLink
            :to="'/'"
            class="back__link"
        >
            Вернуться на главную
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
    .back {
        margin-top: 24px;
        &__link {
            text-decoration: none;
            color: #000;
        }
    }
</style>