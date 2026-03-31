import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView     from '../views/HomeView.vue'
import AboutView    from '../views/AboutView.vue'
import TrainingView from '../views/TrainingView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import ContactView  from '../views/ContactView.vue'

const routes = [
  { path: '/',          component: HomeView,     meta: { title: 'Coast 2 Coast Training Ltd' } },
  { path: '/about',     component: AboutView,    meta: { title: 'About & Team' } },
  { path: '/training',  component: TrainingView, meta: { title: 'Training Courses' } },
  { path: '/delivery',  component: DeliveryView, meta: { title: 'Passage Delivery' } },
  { path: '/contact',   component: ContactView,  meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach(to => {
  document.title = `${to.meta.title} — Coast 2 Coast Training Ltd`
})

export default router
