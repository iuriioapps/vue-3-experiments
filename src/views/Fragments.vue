<template>
    <h3>Fragments and multi- `v-model`</h3>

    <user-info-form
        v-model:first-name="firstName"
        v-model:last-name="lastName" />
    <div>
        {{ firstName }} {{ lastName }}
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import UserInfoForm from '@/components/vmodel/UserInfoForm.vue';

    export default defineComponent({
        name: 'Fragments',

        components: {
            UserInfoForm
        },

        data() {
            return {
                firstName: '',
                lastName: ''
            }
        }
    });
</script>

<style lang="scss">

</style>
