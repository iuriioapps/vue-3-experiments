<template>
    <div class="app">
        <app-header />
        <app-sidenav />
        <div class="app-content">
            <router-view />
        </div>
    </div>
</template>

<script type="ts">
    import { defineComponent } from 'vue';

    import AppHeader from '@/components/navigation/AppHeader.vue';
    import AppSidenav from '@/components/navigation/AppSidenav.vue';

    export default defineComponent({
        name: 'App',

        components: {
            AppHeader,
            AppSidenav
        }
    });
</script>

<style lang="scss">
    .app {
        height: calc(100vh - 6rem);
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: max-content 100%;
        grid-template-areas: "header header" "sidenav content";

        &-header {
            grid-area: header;
        }

        &-sidenav {
            grid-area: sidenav;
        }

        &-content {
            grid-area: content;
            padding: 1rem;
        }
    }
</style>
