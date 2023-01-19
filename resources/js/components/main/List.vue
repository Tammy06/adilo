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
                <tr>
                    <td>
                        <div class="relative w-32 h-16 rounded-md overflow-hidden">
                            <video class="object-cover w-full h-full" width="320" height="240" controls>
                                <source src="videos/mov_bbb.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <span class="text-xs text-white bg-black px-2 py-1 absolute right-1 bottom-1">2:44</span>
                        </div>
                    </td>
                    <td>
                        <div class="w-1/2">
                            <h4>Getting it right the first time</h4>
                            <p class="text-pacific-blue">The Video description is shown here if the user has added it.</p>
                        </div>
                    </td>
                    <td><span class="px-2">324</span></td>
                    <td><span class="px-2 whitespace-nowrap">923 KB</span></td>
                    <td><span class="px-2 whitespace-nowrap">3 months ago</span></td>
                    <td><span class="text-lg cursor-pointer"><i class="fas fa-ellipsis-h"></i></span></td>
                </tr>
                
            </table>
        </div>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>
