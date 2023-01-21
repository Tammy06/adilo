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
          <div v-if="!mediaStream" class="rounded-lg bg-rhino h-full w-full absolute top-0"></div>
        </div>

        <div class="text-center mb-6">
            <button v-if="!this.recording" class="w-fit text-xs text-white text-ce capitalize rounded-2xl cursor-pointer py-2 px-5 bg-pacific-blue" @click="startCapture">Start Recording</button>

            <button v-if="this.recording" class="w-fit text-xs text-white text-ce capitalize rounded-2xl cursor-pointer py-2 px-5 bg-custom-red" @click="stopCapture">Stop Recording</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recording: false,
      mediaStream: null,
      mediaRecorder: null,
      recordedChunks: [],
      BLOB: null,
    }
  },

  mounted() {
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
              // width: 300,
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
            this.mediaStream = mediaStream;
            // this.$refs.video.play()
            this.startRec();

          }).catch((err) => {
            console.error("Error: " + err);
          });
      }

      if(useScreen){
        navigator.mediaDevices.getDisplayMedia(screenMediaOptions)
          .then(mediaStream => {
            this.$refs.video.srcObject = mediaStream;
            this.mediaStream = mediaStream;
            // this.$refs.video.play()
            this.startRec();
          }).catch((err) => {
            console.error("Error: " + err);
          });
      }

    },

    startRec () {
      // needed to retain vue object in callback function
      let self = this;

      this.recording = true;
      let chunks = this.recordedChunks;

      // for better browser support
      const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") 
             ? "video/webm; codecs=vp9" 
             : "video/webm";

      this.mediaRecorder = new MediaRecorder(this.mediaStream, { mimeType: mime });
      this.mediaRecorder.ondataavailable = function (e) {
        if (e.data.size > 0) {
          chunks.push(e.data);
          this.recordedChunks = chunks;
          // create blob to be used for video source
          self.createBlob();
        }  
      };

      // save recording 
      this.mediaRecorder.onstop = function () {
        self.saveRecording();
      };

      this.mediaRecorder.start();
    },

    stopCapture() {
      this.recording = false;
      let tracks = this.mediaStream.getTracks();
      tracks.forEach(track => track.stop());
      this.mediaRecorder.stop();
    },

    createBlob(){
      this.BLOB = new Blob(this.recordedChunks, {
          type: "video/webm"
      });
    },

    saveRecording() {
      var src = URL.createObjectURL(this.BLOB);
      var title = 'Test video';
      var description = 'This is the video description, click to preview and download video';
      // generate video data
      var recordedData = {
        id: Date.now(),
        src: src,
        // dummy data
        title: title,
        description: description,
        views: 324,
        size: '923 KB',
        lastModified: '2 Months ago',
      };

      this.$store.dispatch('addToRecordings', recordedData);
      this.recordedChunks = [];
      this.$store.dispatch('showList', false);
    }

  }
}
</script>
