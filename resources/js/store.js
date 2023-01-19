import { createStore } from 'vuex';

export default createStore({
    state: {
        preview: false,
    },

    mutations: {
        UPDATE_PREVIEW(state, payload) {
            state.preview = payload;
        }
    },

    actions: {
        showPreview(context, payload) {
            // const favorites = context.state.favorites
            // favorites.push(payload)
            context.commit('UPDATE_PREVIEW', payload);
        }
    },

    getters: {
        // mediaType(state){
        //     return state;
        // },
    }
});