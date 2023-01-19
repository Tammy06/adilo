<template>
    <div>
        <Header/>
        <div v-if="!this.$store.state.preview" class="grid grid-cols-layout">
            <Aside/>
            <Main/>
        </div>
        <Preview v-if="this.$store.state.preview"/>
    </div>
</template>

<script>
    import Main from './main/Main.vue';
    import Header from './Header.vue';
    import Aside from './Aside.vue';
    import Preview from './Preview.vue';

    export default {
        
        mounted() {
            console.log('Component mounted.')
        },
        components : { Header, Aside, Main, Preview },
    }
</script>
