import { createRouter, createWebHistory } from 'vue-router';

import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CouchDetails from './pages/coaches/CouchDetails.vue';
import CouchesList from './pages/coaches/CouchesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CouchesList },
        { 
            path: '/coaches/:id', 
            component: CouchDetails, 
            children: [
            { path: 'contact', component: ContactCoach },
        ] },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;
