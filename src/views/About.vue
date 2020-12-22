<template>
    <div class="about">
        About
    </div>
</template>

<script type="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        async setup() {
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    });
</script>
