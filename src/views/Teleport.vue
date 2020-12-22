<template>
    <button @click="modalOpen = !modalOpen">
        Open modal
    </button>

    <teleport to="#sidenav">
        <li>
            <router-link to="/hidden">Hidden route</router-link>
        </li>
    </teleport>

    <app-modal v-model:open="modalOpen">
        <template #header>
            This is header
        </template>
        <div>
            This is modal content
        </div>
        <template #footer>
            <button @click="modalOpen = false">
                Cancel
            </button>
        </template>
    </app-modal>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import router from '@/router';

    import AppModal from '@/components/modals/AppModal.vue';
    import Hidden from '@/views/Hidden.vue';

    // noinspection JSUnusedGlobalSymbols
    export default defineComponent({
        name: 'Teleport',

        components: {
            AppModal
        },

        data() {
            return {
                modalOpen: false
            };
        },

        beforeMount() {
            router.addRoute({
                path: '/hidden',
                name: 'Hidden',
                component: Hidden
            });
        }
    })
</script>
