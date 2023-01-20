<template>
  <div class="flex justify-center">
    <div class="w-5/6">
        <div class="text-sm">
            <table class="w-full text-rhino media-table">
                <tr class="font-bold text-sm capitalize align-left">
                    <td>recording</td>
                    <td>title</td>
                    <td class="px-2">view</td>
                    <td class="px-2">size</td>
                    <td class="px-2 whitespace-nowrap">Last Modified</td>
                </tr>
                <tr v-for="(recordings, index) in this.$store.getters.recordings" :key="recordings.name">
                    <td>
                        <div class="relative w-32 h-16 rounded-md overflow-hidden">
                            <video class="object-cover w-full h-full" width="320" height="240" controls>
                                <source :src="recordings.src" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <span class="text-2xs text-white rounded bg-black px-2 absolute right-1 bottom-1">2:44</span>
                        </div>
                    </td>
                    <td>
                        <div class="w-1/2 cursor-pointer">
                            <a :href="recordings.src" target="_blank" class="block">
                                <h4>{{recordings.title + ' (' + (index + 1) + ')'}}</h4>
                                <p class="text-pacific-blue">{{recordings.description}}</p>
                            </a>
                        </div>
                    </td>
                    <td><span class="px-2">{{recordings.views}}</span></td>
                    <td><span class="px-2 whitespace-nowrap">{{recordings.size}}</span></td>
                    <td><span class="px-2 whitespace-nowrap">{{recordings.lastModified}}</span></td>
                    <td><span class="text-lg cursor-pointer"><i class="fas fa-ellipsis-h"></i></span></td>
                </tr>
                
            </table>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        //    
    }
</script>
