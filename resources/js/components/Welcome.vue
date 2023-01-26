<template>
    <div>
        <Header/>
        <RouterView/>
    </div>
</template>

<script>
    import Header from './Header.vue';

    export default { 
        components : { Header },
    }
</script>
