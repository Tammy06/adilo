<template>
    <div>
        <Header/>
        <div class="grid grid-cols-layout">
            <Aside/>
            <Main/>
        </div>
        <!-- <Preview/> -->
        <!-- <Modal/> -->
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Aside from './Aside.vue';
    import Main from './main/Main.vue';
    import Modal from './Modal.vue';
    import Preview from './Preview.vue';

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components : { Header, Aside, Main, Modal, Preview },
    }
</script>
