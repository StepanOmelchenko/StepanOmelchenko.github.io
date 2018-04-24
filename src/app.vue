<template lang="pug">
    .wrapper
        .header
            app-header
        .menu
            app-menu
</template>

<script>
import header from './components/header'
import menu from './components/menu'

export default {
    components: {
        appHeader: header,
        appMenu: menu
    }
}
</script>

<style lang="scss">
    .wrapper{
        background-color: violet;
    }
</style>


