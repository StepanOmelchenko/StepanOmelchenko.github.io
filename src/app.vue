<template lang="pug">
    .wrapper
        .header
            app-header
</template>

<script>
import header from './components/header'

export default {
    components: {
        appHeader: header
    }
}
</script>

<style lang="scss">
    .wrapper{
        background-color: violet;
    }
</style>


