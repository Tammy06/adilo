<template>
    <div>
        <Header/>
        <div v-if="!this.$store.state.preview" class="grid grid-cols-layout">
            <Aside/>
            <Layout/>
        </div>
        <Preview v-if="this.$store.state.preview"/>
    </div>
</template>

<script>
    import Layout from './main/Layout.vue';
    import Header from './Header.vue';
    import Aside from './Aside.vue';
    import Preview from './Preview.vue';

    export default { 
        components : { Header, Aside, Layout, Preview },
    }
</script>
