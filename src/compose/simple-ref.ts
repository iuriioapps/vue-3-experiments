import { ref } from '@vue/reactivity';

const count = ref(1);

const increment = () => {
    count.value++;
}

export { count, increment };
