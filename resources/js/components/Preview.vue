<template>
  <div>
    <div class="w-1/3 my-10 mx-auto">
        <div class="flex justify-start">
            <div class="bg-custom-red rounded-full w-4 h-4 flex justify-center items-center">
                <div class="border-2 border-white rounded-full w-3 h-3"></div>
            </div>
            <p class="text-xs ml-2">Live Preview</p>
        </div>
        <div class="rounded-lg bg-rhino h-72 mt-3 mb-8"><!-- Preview goes here --></div>
        <div class="text-center mb-6">
            <button disabled class="w-fit text-xs text-white text-ce capitalize rounded-2xl cursor-pointer py-2 px-5 bg-pacific-blue">Start Recording</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // get permission
    var media = this.$store.getters.media;
    console.log(media);
  },
}
</script>
