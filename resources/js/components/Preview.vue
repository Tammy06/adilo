<template>
  <div>
    <div class="w-1/3 my-10 mx-auto">
        <div class="flex justify-start">
            <div class="bg-custom-red rounded-full w-4 h-4 flex justify-center items-center">
                <div class="border-2 border-white rounded-full w-3 h-3"></div>
            </div>
            <p class="text-xs ml-2">Live Preview</p>
        </div>
        
        <div class="rounded-lg mt-3 mb-8 relative overflow-hidden">
          <video class="h-full w-full object-cover" ref="video" autoPlay muted></video>
          <div v-if="!this.$store.getters.isRecording" class="rounded-lg bg-rhino h-full w-full absolute top-0"></div>
        </div>

        <div class="text-center mb-6">
            <button v-if="!this.$store.getters.isRecording" class="w-fit text-xs text-white text-ce capitalize rounded-2xl cursor-pointer py-2 px-5 bg-pacific-blue" @click="startCapture">Start Recording</button>

            <button v-else class="w-fit text-xs text-white text-ce capitalize rounded-2xl cursor-pointer py-2 px-5 bg-custom-red" @click="stopCapture">Stop Recording</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
  mounted() {

    if(this.$store.getters.isRecording){
      this.$refs.video.srcObject = this.$store.getters.mediaStream;
      return;
    }

    // get user permission (browsers handles this by default)
    // ['camera', 'microphone'].forEach(name => {
    //   navigator.permissions.query({name:name}).then(function(result) {
    //     if (result.state === 'denied') {
    //         $store.dispatch('showList', false);
    //         return;
    //     }
    //   });
    // });
    
  },

  methods: {
    startCapture() {
      var useCamera = false;
      var useScreen = false;
      var allowAudio = false;
      var mediaOptions = this.$store.getters.media;

      // check if audio is available
      mediaOptions.forEach(option => {
        if(option.name == 'mic' && option.checked){
          allowAudio = true;
        }
      });

      // set user/device media options
      var cameraMediaOptions = {
          video: {
              // use default size
              // width: 720,
              // height: 300
          },
          audio: allowAudio
      }

      var screenMediaOptions = {
        video: {
          // use default size
          // width: 720,
          // height: 480,
          aspectRatio: 1920/1080,
          cursor: "never",
          frameRate: 30
        },
        audio: allowAudio
      }

      // check which media was selected for recording
      mediaOptions.forEach(option => {
        if(option.checked){
          if(option.name == 'camera'){
            useCamera = true;
          }

          if(option.name == 'screen'){
            useScreen = true;
          }
        }
      });

      // start recording processes
      if(useCamera){
        navigator.mediaDevices.getUserMedia(cameraMediaOptions)
          .then(mediaStream => {
            this.$refs.video.srcObject = mediaStream;
            this.$store.dispatch('updateMediaStream', mediaStream);
            this.startRec();

          }).catch((err) => {
            console.error("Error: " + err);
          });
      }

      if(useScreen){
        navigator.mediaDevices.getDisplayMedia(screenMediaOptions)
          .then(mediaStream => {
            this.$refs.video.srcObject = mediaStream;
            this.$store.dispatch('updateMediaStream', mediaStream);
            this.startRec();
          }).catch((err) => {
            console.error("Error: " + err);
          });
      }

    },

    startRec () {
      // needed to retain vue object in callback function
      let self = this;

      this.$store.dispatch('isRecording', true);
      let chunks = this.$store.getters.recordedChunks;
      this.$store.dispatch('updateStartTime', new Date());


      // for better browser support
      const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") 
             ? "video/webm; codecs=vp9" 
             : "video/webm";

      let mediaRecorder = new MediaRecorder(this.$store.getters.mediaStream, { mimeType: mime });
      this.$store.dispatch('updateMediaRecorder', mediaRecorder);
      this.$store.getters.mediaRecorder.ondataavailable = function (e) {
        if (e.data.size > 0) {
          chunks.push(e.data);
          self.$store.dispatch('addToRecordedChunks', chunks);
          // create blob to be used for video source
          self.createBlob();
        }  
      };

      // save recording 
      this.$store.getters.mediaRecorder.onstop = function () {
        self.saveRecording();
      };

      this.$store.getters.mediaRecorder.start();
    },

    stopCapture() {
      this.$store.dispatch('isRecording', false);
      let tracks = this.$store.getters.mediaStream.getTracks();
      tracks.forEach(track => track.stop());
      this.$store.getters.mediaRecorder.stop();
    },

    createBlob(){
      let blob = new Blob(this.$store.getters.recordedChunks, {
          type: "video/webm"
      });
      this.$store.dispatch('updateBlob', blob);
    },

    saveRecording() {
      let src = URL.createObjectURL(this.$store.getters.blob);
      let title = 'Test video';
      let description = 'This is the video description, click to preview and download video';
      let date = new Date(); // seconds to milliseconds
      let duration = Math.abs(date - this.$store.getters.startTime) / 1000;
      let mins = parseInt(duration / 60, 10);
      let secs = Math.round(duration % 60);
      // generate video data
      var recordedData = {
        id: Date.now(),
        src: src,
        
        // dummy data
        title: title,
        description: description,
        views: 0,

        size: (this.$store.getters.blob.size / 1000000).toFixed(2) + ' MB', // bytes to megabytes
        lastModified: date,
        duration: mins +':'+ (secs.toString().length == 1 ? '0' + secs : secs),
      };

      this.$store.dispatch('addToRecordings', recordedData);
      this.$store.dispatch('clearRecordedChunks', []);
      this.$store.dispatch('updateMediaStream', null);
      this.$store.dispatch('updateMediaRecorder', null);
      this.$store.dispatch('updateStartTime', 0);
      this.$router.push({
        path: '/'
      });
    }

  }
}
</script>
