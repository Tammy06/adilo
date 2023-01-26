<template>
    <div v-if="!this.$store.state.preview" class="grid grid-cols-layout">
        <Aside/>
        <Main/>
    </div>
</template>

<script>
    import Main from './main/Main.vue';
    import Aside from './Aside.vue';

    export default {
        components : { Aside, Main },
    }
</script>