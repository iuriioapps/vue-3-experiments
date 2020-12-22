<!--suppress HtmlFormInputWithoutLabel -->
<template>
    <input
        class="input-field"
        type="text"
        :placeholder="label"
        v-bind="$attrs"
        :id="id">
    <label :for="id">{{ label }}</label>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'InputField',

        props: {
            id: {
                type: String,
                default: 'input',
                required: true
            },
            label: {
                type: String,
                default: ''
            }
        }
    });
</script>

<style lang="scss">
    .input-field {
        height: 3rem;
        border: solid 1px grey;
        border-radius: 4px;
        padding: 4px;

        & + label {
            display: block;
            height: 1.6rem;
            opacity: 0;
            transform: translateY(-130%);
            transition: all 0.2s ease-out;
        }

        &:not(:placeholder-shown) + label {
            font-size: 0.8rem;
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
