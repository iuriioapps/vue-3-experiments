<template>
    <aside class="app-sidenav">
        <ul id="sidenav">
            <template v-for="(route, index) in routes">
                <li
                    v-if="route.name"
                    :key="index">
                    <router-link :to="route.path">
                        {{ route.name }}
                    </router-link>
                </li>
            </template>
        </ul>
    </aside>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import router from '@/router';

    export default defineComponent({
        name: 'AppSidenav',

        data() {
            return {
                routes: router.getRoutes()
            };
        }
    })
</script>

<style lang="scss">
    .app-sidenav {
        min-width: 14rem;
        padding: 1.6rem;
        display: flex;
        flex-flow: column nowrap;
        background-color: whitesmoke;

        li {
            display: flex;

            &:not(:last-child) {
                margin-bottom: .8rem;
            }
        }

        li a {
            display: block;

            &:link,
            &:visited {
                color: #292626;
            }
        }
    }
</style>
