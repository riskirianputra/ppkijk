import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'
import Gallery from '../views/Gallery.vue'
import Agenda from '../views/Agenda.vue'
import Member from '../views/Member.vue'
import Contact from '../views/Contact.vue'
import Informasianalisis from '../views/Informasianalisis.vue'
import Informasiumum from '../views/Informasiumum.vue'
import Artikel from '../views/Artikel.vue'
import Berita from '../views/Berita.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: Agenda
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/informasianalisis',
    name: 'informasianalisis',
    component: Informasianalisis
  }, 
  {
    path: '/informasiumum',
    name: 'informasiumum',
    component: Informasiumum
  },
  {
    path: '/artikel',
    name: 'artikel',
    component: Artikel
  },
  {
    path: '/berita',
    name: 'berita',
    component: Berita
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
