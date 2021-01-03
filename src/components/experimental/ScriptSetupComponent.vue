<!--suppress ES6UnusedImports -->
<template>
    <div>{{ count }}</div>
    <button @click="increment">Increment</button>
</template>

<script lang="ts" setup>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    import { count, increment } from '@/compose/simple-ref';
</script>
