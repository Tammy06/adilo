<template>
  <div class="fixed top-0 left-0 bg-modal z-10 w-screen h-screen flex justify-center align-middle">
    <div class="bg-white rounded-lg mt-28 w-1/4 h-fit">
        <div class="flex justify-between px-7 pt-3 pb-1 mb-4 border-b border-b-gray-200 font-bold focus:ring-0">
            <p class="capitalize">new recording</p>
            <p class="text-3xl relative -top-2 cursor-pointer" @click="hideModal">&times;</p>
        </div>
        <div class="my-4 mx-auto w-5/6">
          <p class="mb-2 text-sm">Save the recording in</p>
          <div>
            <select class="bg-gray-light-400 w-full rounded border border-gray-dark-100 text-sm p-1">
              <option disabled>Select a project</option>
              <option value="my recordings" selected>My Recordings</option>
            </select>
          </div>

          <div class="my-6 text-sm" v-for="(toggleSwitch, index) in toggleSwitches" :key="toggleSwitch.name">
            <div class="flex justify-between mb-3">
              <p>Record {{toggleSwitch.name}}</p>
              <div class="w-10 h-5 rounded-xl cursor-pointer toggle-switch" :class="[toggleSwitch.checked ? 'toggle-switch--checked': 'toggle-switch--unchecked']" @click="selectRecordingType(index, toggleSwitch.name, toggleSwitch.checked)">
                <div class="w-5 h-5 rounded-full bg-white text-center">
                  <i class="fa fa-check text-xs text-saffron-mango" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            
          </div>

          <div class="text-center mb-6">
            <button :disabled="disabledButton" class="w-2/3 text-xs text-white text-ce capitalize rounded-2xl cursor-pointer py-2 px-5 bg-pacific-blue" @click="$store.dispatch('showPreview', true)">Start Recording</button>
          </div>
          
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showModal: true,
      disabledButton: true,
      toggleSwitches: [
        {
          name: 'screen',
          checked: false
        },
        {
          name: 'camera',
          checked: false
        },
        {
          name: 'mic',
          checked: false
        },
      ],
    }
  },
  methods: {
    hideModal(){
      this.$emit('hide-modal', true);
    },
    selectRecordingType(index, type, checked){
      var videoTypes = ['screen', 'camera'];
      var toggleSwitches = this.toggleSwitches;
      var count = 0;

      // toggle switch action
      toggleSwitches[index].checked = !checked;
      this.toggleSwitches = toggleSwitches;

      // enable button if either screen or camera is selected
      toggleSwitches.forEach((toggleSwitch) => {
        if(videoTypes.includes(toggleSwitch.name) && toggleSwitch.checked){
          count++;
        }
      });
      this.disabledButton = count ? false : true;

      // prevent selection of both screen and camera together
      if(type == 'mic'){
        return;
      }

      toggleSwitches.forEach((toggleSwitch) => {
        if(videoTypes.includes(toggleSwitch.name) && type != toggleSwitch.name){
          toggleSwitch.checked = false;
          this.toggleSwitches = toggleSwitches;
        }
      });
      
    },
  }
}
</script>
