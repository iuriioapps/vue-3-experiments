<template>
    <form class="user-form" @submit.prevent>
        <input-field
            id="firstName"
            label="First name"
            :value="firstName"
            @input="$emit('update:first-name', $event.target.value)"
        />
        <input-field
            id="lastName"
            label="Last name"
            :value="lastName"
            @input="$emit('update:last-name', $event.target.value)"
        />
    </form>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import InputField from '../fragments/InputField.vue';

    export default defineComponent({
        name: 'UserInfoForm',

        emits: [
            'update:first-name',
            'update:last-name'
        ],

        components: {
            InputField
        },

        props: {
            firstName: {
                type: String,
                default: ''
            },
            lastName: {
                type: String,
                default: ''
            }
        }
    });
</script>

<style lang="scss">
    .user-form {
        display: flex;
        flex-flow: column nowrap;
    }
</style>
