<template>
  <div class="flex justify-center">
    <div class="w-5/6">
        <div class="text-sm">
            <table class="w-full text-rhino media-table">
                <tr class="font-bold text-sm capitalize align-left">
                    <td>recording</td>
                    <td>title</td>
                    <td class="px-2">views</td>
                    <td class="px-2">size</td>
                    <td class="px-2 whitespace-nowrap">Last Modified</td>
                </tr>
                <tr v-for="(recording) in this.$store.getters.recordings" :key="recording.name">
                    <td>
                        <div class="relative w-32 h-16 rounded-md overflow-hidden">
                            <video class="object-cover w-full h-full" width="320" height="240" controls>
                                <source :src="recording.src" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <span class="text-2xs text-white rounded bg-black px-2 absolute right-1 bottom-1">{{recording.duration}}</span>
                        </div>
                    </td>
                    <td>
                        <div class="w-1/2 cursor-pointer">
                            <a :href="recording.src" target="_blank" class="block">
                                <h4>{{recording.id + ' - ' + recording.title}}</h4>
                                <p class="text-pacific-blue">{{recording.description}}</p>
                            </a>
                        </div>
                    </td>
                    <td><span class="px-2">{{recording.views}}</span></td>
                    <td><span class="px-2 whitespace-nowrap">{{recording.size}}</span></td>
                    <td><span class="px-2 whitespace-nowrap capitalize">{{timeago(recording.lastModified)}}</span></td>
                    <td class="relative">
                        <div class="absolute top-1/4 expand-on-hover">
                            <span class="text-lg cursor-pointer"><i class="fas fa-ellipsis-h"></i></span>
                            <div class="w-fit p-1 bg-custom-red text-xs text-white rounded mt-2 cursor-pointer hidden" @click="this.$store.dispatch('deleteRecord', recording.id);">delete</div>
                        </div>
                    </td>
                </tr>
                
            </table>
        </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        methods: {
            timeago(value) {
                return moment(value).fromNow();
            },
        },   
    }
</script>
