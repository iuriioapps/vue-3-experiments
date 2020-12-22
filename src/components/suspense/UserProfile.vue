<template>
    <table
        v-if="user"
        class="user-info-table">
        <thead>
            <tr>
                <td>Prop</td>
                <td>Value</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ID:</td>
                <td>{{ user.id }}</td>
            </tr>
            <tr>
                <td>First name:</td>
                <td>{{ user.firstName }}</td>
            </tr>
            <tr>
                <td>Last name:</td>
                <td>{{ user.lastName }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { fetchUser } from '@/api/fakeData';

    export default defineComponent({
        name: 'UserProfile',

        async setup() {
            const user = await fetchUser();
            return { user };
        }
    });
</script>

<style lang="scss">
    .user-info-table {
        font-size: 2rem;
        border-collapse: collapse;

        thead {
            background-color: lightgray;
        }

        td {
            padding: .4rem;
        }

        tbody td:first-child {
            font-weight: bolder;
            background-color: lightblue;
        }
    }
</style>
