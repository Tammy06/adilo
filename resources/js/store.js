import { createStore } from 'vuex';

export default createStore({
    state: {
        recordingInProgress: false,
        startTime: 0,
        media: [],
        recordings: [],
        mediaStream: null,
        mediaRecorder: null,
        recordedChunks: [],
        BLOB: null,
    },

    mutations: {
        UPDATE_RECORDING_STATE(state, payload) {
            state.recordingInProgress = payload;
        },

        UPDATE_MEDIA(state, payload) {
            state.media = payload;
        },

        UPDATE_RECORDINGS(state, payload) {
            state.recordings = payload;
        },

        UPDATE_MEDIA_STREAM(state, payload) {
            state.mediaStream = payload;
        },

        UPDATE_MEDIA_RECORDER(state, payload) {
            state.mediaRecorder = payload;
        },

        UPDATE_RECORDED_CHUNKS(state, payload) {
            state.recordedChunks = payload;
        },

        UPDATE_BLOB(state, payload) {
            state.BLOB = payload;
        },

        UPDATE_START_TIME(state, payload) {
            state.startTime = payload;
        },
    },

    actions: {
        record(context, payload) {
            context.commit('UPDATE_MEDIA', payload);
        },

        isRecording(context, payload){
            context.commit('UPDATE_RECORDING_STATE', payload);
        },

        addToRecordings(context, payload){
            var recordings = context.state.recordings;
            recordings.push(payload);
            context.commit('UPDATE_RECORDINGS', recordings);
        },

        deleteRecord(context, payload){
            var recordings = context.state.recordings;
            recordings.forEach((record, index) => {
                if(record.id == payload) recordings.splice(index, 1);
            });           
            context.commit('UPDATE_RECORDINGS', recordings);
        },

        updateMediaStream(context, payload) {
            context.commit('UPDATE_MEDIA_STREAM', payload);
        },

        updateMediaRecorder(context, payload) {
            context.commit('UPDATE_MEDIA_RECORDER', payload);
        },

        addToRecordedChunks(context, payload) {
            var chunks = context.state.recordedChunks;
            chunks.push(payload);
            context.commit('UPDATE_RECORDED_CHUNKS', chunks);
        },

        clearRecordedChunks(context, payload) {
            context.commit('UPDATE_RECORDED_CHUNKS', payload);
        },

        updateBlob(context, payload) {
            context.commit('UPDATE_BLOB', payload);
        },

        updateStartTime(context, payload) {
            context.commit('UPDATE_START_TIME', payload);
        },
    },

    getters: {
        media(state){
            return state.media;
        },

        recordings(state){
            return state.recordings;
        },

        isRecording(state){
            return state.recordingInProgress;
        },
        
        blob(state){
            return state.BLOB;
        },

        mediaStream(state){
            return state.mediaStream;
        },

        mediaRecorder(state){
            return state.mediaRecorder;
        },

        recordedChunks(state){
            return state.recordedChunks;
        },

        startTime(state){
            return state.startTime;
        },
    }
});