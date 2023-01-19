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
          <p>My Recordings <span class="text-rhino font-semibold">25</span></p>
        </div>
        <div class="relative flex justify-end">
          <div class="grid grid-cols-4 gap-x-4 h-5 text-xs text-center text-gray-500 capitalize mt-2">
            <div class="cursor-pointer border border-gray-300 rounded-3xl py-2 px-4">
              <span class="inline-block mr-2">&#8693;</span>
              <span>By Date</span>
            </div>
            <div class="cursor-pointer border border-gray-300 rounded-3xl py-2 px-4">
              <span class="inline-block mr-2 rounded-lg"><i class="fas fa-filter"></i></span>
              <span>add filter <i class="text-2xs text-smokey-grey fa-solid fa-angle-down"></i></span>
            </div>
            <div class="cursor-pointer rounded-3xl py-2 px-4 bg-pacific-blue text-white">
              <span class="inline-block mr-2 rounded-lg"><i class="fas fa-video"></i></span>
              <span>new request</span>
            </div>
            <div class="cursor-pointer rounded-3xl py-2 px-4 bg-custom-red text-white">
              <span class="inline-block mr-2 rounded-lg"><i class="fas fa-play"></i></span>
              <span>start recording</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <List/> -->
    <Empty/>
  </div>
</template>

<script>
  import List from "./List.vue";
  import Empty from "./Empty.vue";
  import Preview from "../Preview.vue";

  export default {
      mounted(){
          console.log('main');
      },
      components : { List, Empty, Preview }
  }
</script>
