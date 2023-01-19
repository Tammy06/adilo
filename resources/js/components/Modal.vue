<template>
  <div class="fixed top-0 bg-modal z-10 w-full h-full flex justify-center align-middle">
    <div class="bg-white rounded-lg mt-28 w-1/4 h-fit">
        <div class="flex justify-between px-7 pt-3 pb-1 mb-4 border-b border-b-gray-200 font-bold focus:ring-0">
            <p class="capitalize">new recording</p>
            <p class="text-3xl relative -top-2 cursor-pointer">&times;</p>
        </div>
        <div class="my-4 mx-auto w-5/6">
          <p class="mb-2 text-sm">Save the recording in</p>
          <div>
            <select class="bg-gray-light-400 w-full rounded border border-gray-dark-100 text-sm p-1">
              <option disabled>Select a project</option>
              <option value="my recordings" selected>My Recordings</option>
            </select>
          </div>

          <div class="my-6 text-sm">
            <div class="flex justify-between mb-3">
              <p>Record screen</p>
              <div class="w-10 h-5 rounded-xl cursor-pointer toggle-switch toggle-switch--check">
                <div class="w-5 h-5 rounded-full bg-white text-center">
                  <i class="fa fa-check text-xs text-saffron-mango" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            
          </div>

          <div class="text-center mb-6">
            <button class="w-2/3 text-xs text-white text-ce capitalize rounded-2xl cursor-pointer py-2 px-5 bg-pacific-blue">Start Recording</button>
          </div>
          
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
