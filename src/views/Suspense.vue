<template>
    <h1>Suspense</h1>
    <suspense>
        <template #default>
            <user-profile />
        </template>
        <template #fallback>
            <div>
                <h2>Loading user profile, please wait...</h2>
                <stretch />
            </div>
        </template>
    </suspense>
</template>

<script lang="ts">
    import { defineComponent, defineAsyncComponent } from 'vue';
    import { Stretch } from 'vue-loading-spinner';

    const UserProfile = defineAsyncComponent(
        () => import('@/components/suspense/UserProfile.vue')
    );

    export default defineComponent({
        name: 'Suspense',

        components: {
            Stretch,
            UserProfile
        }
    });
</script>

<style scoped>

</style>
