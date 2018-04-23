<template lang="pug">
    nav.menu
        ul.menu__list
            li.menu__item(v-for="page in pages")
                router-link(:to="page.href").link {{page.name}}
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {name: 'main', href: '/'}
            ]
        }
    }
}
</script>

