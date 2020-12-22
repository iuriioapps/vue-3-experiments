<template>
    <div>{{ count }}</div>
    <button @click="increment">Inc++</button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { count, increment } from '@/compose/simple-ref';

    export default defineComponent({
        name: 'Counter',

        setup() {
            return {
                count, increment
            }
        }
    });
</script>
