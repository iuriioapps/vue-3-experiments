<template>
    <aside class="app-sidenav">
        <ul>
            <li v-for="(item, index) in items"
                :key="index">
                <router-link :to="item.to">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AppSidenav',

        data() {
            return {
                items: [{
                    title: 'Home',
                    to: '/'
                }, {
                    title: 'About',
                    to: '/about'
                }]
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
