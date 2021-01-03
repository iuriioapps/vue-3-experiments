<template>
    <script-setup-component />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import ScriptSetupComponent from '@/components/experimental/ScriptSetupComponent.vue';

    export default defineComponent({
        name: 'Experimental',

        components: {
            ScriptSetupComponent
        }
    });
</script>

<style scoped>

</style>
