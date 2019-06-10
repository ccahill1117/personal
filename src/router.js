import Vue from 'vue'
import Router from 'vue-router'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Sound from './components/Sound'
import Squash from './components/Squash'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/sound',
      name: 'Sound',
      component: Sound
    },
    {
      path: '/squash',
      name: 'Squash',
      component: Squash
    }
  ]
})
