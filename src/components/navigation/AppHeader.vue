<template>
    <nav class="app-header">
        <img src="/img/vue-logo.png" alt="vue">
        <img src="/img/one-piece-logo-green.png" alt="one piece">
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "AppHeader"
    })
</script>

<style lang="scss">
    $header-height: 6rem;

    .app-header {
        min-height: $header-height;
        max-height: $header-height;
        overflow: hidden;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        background-color: #292626;
        box-shadow: 0 4px 9px rgba(green, .1);

        & > img {
            height: $header-height * 0.8;
            margin-left: 0.8rem;
            display: inline-block;
            object-fit: contain;
        }
    }
</style>
