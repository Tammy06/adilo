<template>
  <div class="flex justify-center">
    <div class="w-5/6">
        <div class="text-center w-72 my-5 mx-auto">
            <div class="text-center mb-5">
                <i class="fa fa-folder text-9xl text-gray-light-300" aria-hidden="true"></i>
            </div>
            <h2 class="font-bold mb-2">Say hello to the world!</h2>
            <p class="text-xs text-gray-400">Record your first video/audio and share it what your team, friends, followers and customers.</p>

            <div class="flex justify-between align-middle text-xs text-gray-500 capitalize my-5 mx-auto">
                <div class="cursor-pointer rounded-3xl py-2 px-4 bg-pacific-blue text-white">
                    <span class="inline-block mr-2 rounded-lg"><i class="fas fa-video"></i></span>
                    <span>new request</span>
                </div>
                <div class="cursor-pointer rounded-3xl py-2 px-4 bg-custom-red text-white" @click="this.showModal = true">
                    <span class="inline-block mr-2 rounded-lg"><i class="fas fa-play"></i></span>
                    <span>start recording</span>
                </div>
            </div>
        </div>
    </div>
    <Modal v-if="this.showModal" v-on:hide-modal="this.showModal = false" />
  </div>
</template>

<script>
    import Modal from './Modal.vue';

    export default {
        data(){
            return {
                showModal: false,
            }
        },
        components : { Modal },
    }
</script>
