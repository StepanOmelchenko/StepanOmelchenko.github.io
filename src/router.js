import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import main from './components/main'

const routes = [
    {
        path: '/',
        component: main
    }
];

export default new VueRouter({
    routes,
    mode: 'history'
});