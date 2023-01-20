import { createStore } from 'vuex';

export default createStore({
    state: {
        preview: false,
        media: [],
    },

    mutations: {
        UPDATE_PREVIEW(state, payload) {
            state.preview = payload;
        },

        UPDATE_MEDIA(state, payload) {
            state.media = payload;
        },
    },

    actions: {
        record(context, payload) {
            // var media = context.state;
            context.commit('UPDATE_PREVIEW', true);
            context.commit('UPDATE_MEDIA', payload);
        },

        showList(context, payload){
            context.commit('UPDATE_PREVIEW', payload);
        }
    },

    getters: {
        media(state){
            return state.media;
        },
    }
});