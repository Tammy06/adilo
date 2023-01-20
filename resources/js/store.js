import { createStore } from 'vuex';

export default createStore({
    state: {
        preview: false,
        media: [],
        recordings: []
    },

    mutations: {
        UPDATE_PREVIEW(state, payload) {
            state.preview = payload;
        },

        UPDATE_MEDIA(state, payload) {
            state.media = payload;
        },

        UPDATE_RECORDINGS(state, payload) {
            state.recordings = payload;
        },
    },

    actions: {
        record(context, payload) {
            context.commit('UPDATE_PREVIEW', true);
            context.commit('UPDATE_MEDIA', payload);
        },

        addToRecordings(context, payload){
            var recordings = context.state.recordings;
            recordings.push(payload);
            context.commit('UPDATE_RECORDINGS', recordings);
        },

        showList(context, payload){
            context.commit('UPDATE_PREVIEW', payload);
        }
    },

    getters: {
        media(state){
            return state.media;
        },

        recordings(state){
            return state.recordings;
        },
    }
});