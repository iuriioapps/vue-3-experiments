<template>
    <teleport to="#modals">
        <transition name="fade">
            <div
                v-if="open"
                class="modal">
                <div
                    class="modal__backdrop"
                    @click="closeModal" />
                <div
                    class="modal__wrap"
                    @keyup.esc="closeModal">
                    <div
                        v-if="title || $slots.header"
                        class="modal__header">
                        <slot name="header">
                            {{ title }}
                        </slot>
                    </div>
                    <div class="modal__content">
                        <slot />
                    </div>
                    <div
                        v-if="$slots.footer"
                        class="modal__footer">
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export enum ModalEvents {
        UPDATE_OPEN = 'update:open'
    }

    export default defineComponent({
        name: 'AppModal',

        emits: [
            ModalEvents.UPDATE_OPEN
        ],

        props: {
            title: {
                type: String,
                default: ''
            },
            open: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            closeModal() {
                this.$emit(ModalEvents.UPDATE_OPEN, false);
            }
        }
    });
</script>

<style lang="scss">
    @import '../../assets/global';

    .modal {
        @extend .modal-position;

        & > div {
            tab-index: 0;
        }

        &__backdrop {
            background-color: rgba(black, .2);
            @extend .modal-position;
        }

        &__wrap {
            min-width: 40rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            tab-index: 0;
            color: #292626;
            background-color: white;
            box-shadow: 0 4px 4px rgba(black, .15);
        }

        &__header {
            min-height: 4rem;
            display: flex;
            font-size: 2.2rem;
            flex-flow: row nowrap;
            align-items: center;
            padding: .8rem;
            line-height: 2rem;
            background-color: whitesmoke;
        }

        &__content {
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            padding: .8rem;
        }

        &__footer {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-end;
            padding: .8rem;
        }
    }
</style>
