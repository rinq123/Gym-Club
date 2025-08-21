import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Gallery from './components/Gallery.vue';
import Coaches from './components/Coaches.vue';
import Classes from './components/Classes.vue';
import Contact from './components/Contact.vue';

const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/gallery', component: Gallery, name: 'Gallery'},
    {path: '/coaches', component: Coaches, name: 'Coaches'},
    {path: '/classes', component: Classes, name: 'Classes'},
    {path: '/contact', component: Contact, name: 'Contact'},
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;