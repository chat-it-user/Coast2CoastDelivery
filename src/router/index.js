import { createRouter, createWebHistory } from 'vue-router'
import HomeView     from '../views/HomeView.vue'
import AboutView    from '../views/AboutView.vue'
import TrainingView from '../views/TrainingView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import ContactView  from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      title: 'Coast 2 Coast Training Ltd — Yacht Delivery & Sailing Training',
      description: 'Professional yacht delivery and sailing training worldwide. RYA Yachtmaster Instructor & Examiner. ICC training, coastal passages and offshore delivery.',
    },
  },
  {
    path: '/about',
    component: AboutView,
    meta: {
      title: 'About — Coast 2 Coast Training Ltd',
      description: 'Meet Jonathan — RYA Yachtmaster Instructor and Examiner with tens of thousands of offshore miles. Sail and power training tailored to your goals.',
    },
  },
  {
    path: '/training',
    component: TrainingView,
    meta: {
      title: 'Sailing Courses — Coast 2 Coast Training Ltd',
      description: 'ICC training, coastal passage training, Yachtmaster exam preparation and delivery passage crew berths. Hands-on offshore sailing courses worldwide.',
    },
  },
  {
    path: '/delivery',
    component: DeliveryView,
    meta: {
      title: 'Yacht Delivery — Coast 2 Coast Training Ltd',
      description: 'Professional yacht delivery worldwide. Coastal and ocean passages with RYA qualified skippers. Berth-to-berth service with full passage planning.',
    },
  },
  {
    path: '/contact',
    component: ContactView,
    meta: {
      title: 'Contact — Coast 2 Coast Training Ltd',
      description: 'Get in touch with Coast 2 Coast Training Ltd to discuss yacht delivery or sailing training. We respond within 24 hours.',
    },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach(to => {
  document.title = to.meta.title

  let tag = document.querySelector('meta[name="description"]')
  if (tag) tag.setAttribute('content', to.meta.description)
})

export default router
