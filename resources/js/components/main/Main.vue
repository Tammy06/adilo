<template>
  <div>
    <div class="flex justify-center">
      <div class="grid grid-cols-main-header gap-x-32 w-5/6 my-11 ">
        <div class="">
          <div class="flex justify-around text-gray-500 text-xs mb-1">
            <span>Snapbyte</span>
            <span>></span>
            <span>My Recordings</span>
          </div>
          <p>My Recordings <span class="text-rhino font-semibold">{{this.$store.getters.recordings.length}}</span></p>
        </div>
        <div class="relative flex justify-end">
          <div class="grid grid-cols-4 gap-x-4 h-5 text-xs text-center text-gray-500 mt-2">
            <button class="cursor-pointer border border-gray-300 capitalize rounded-3xl py-2 px-4">
              <span class="inline-block mr-2">&#8693;</span>
              <span>By Date</span>
            </button>
            <button class="cursor-pointer border border-gray-300 capitalize rounded-3xl py-2 px-4">
              <span class="inline-block mr-2 rounded-lg"><i class="fas fa-filter"></i></span>
              <span>add filter <i class="text-2xs text-smokey-grey fa-solid fa-angle-down"></i></span>
            </button>
            <button class="cursor-pointer rounded-3xl py-2 px-4 bg-pacific-blue capitalize text-white">
              <span class="inline-block mr-2 rounded-lg"><i class="fas fa-video"></i></span>
              <span>new request</span>
            </button>
            <button v-if="!this.$store.getters.isRecording" class="cursor-pointer rounded-3xl py-2 px-4 bg-custom-red capitalize text-white" @click="this.showModal = true">
              <span class="inline-block mr-2 rounded-lg"><i class="fas fa-play"></i></span>
              <span>start recording</span>
            </button>
            <button v-else class="cursor-pointer rounded-3xl py-2 px-4 bg-custom-red capitalize text-white" @click="this.$router.push({ path: '/preview'});">
              <span class="inline-block mr-2 rounded-lg"><i class="fas fa-stop"></i></span>
              <span>Stop recording</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <List v-if="this.$store.getters.recordings.length" />
    <Empty v-if="!this.$store.getters.recordings.length" />
    <Modal v-if="this.showModal" v-on:hide-modal="this.showModal = false" />
  </div>
</template>

<script>
  import List from "./List.vue";
  import Empty from "./Empty.vue";
  import Preview from "../Preview.vue";
  import Modal from './Modal.vue';

  export default {
      data(){
        return{
          showModal: false,
        }
      },
      components : { List, Empty, Preview, Modal  }
  }
</script>
