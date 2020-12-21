<template>
    <div class="hidden-page">
        <div>This is a hidden page!</div>
        <span class="material-icons">
            lock_open
        </span>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import router from '@/router';

    export default defineComponent({
        name: 'HiddenPage',

        beforeUnmount() {
            router.removeRoute('Hidden');
        }
    });
</script>

<style lang="scss">
    .hidden-page {
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        color: darkred;

        & > * {
            color: currentColor;
        }

        & > span.material-icons {
            font-size: 20rem;
        }
    }
</style>
