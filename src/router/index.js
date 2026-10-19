import { createRouter, createWebHistory } from 'vue-router'
import HomeView     from '../views/HomeView.vue'
import AboutView    from '../views/AboutView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'
import ContactView  from '../views/ContactView.vue'
import TermsView    from '../views/TermsView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      title: 'Coast 2 Coast Delivery — Professional Yacht Delivery Worldwide',
      description: 'Professional skippered yacht delivery worldwide. STCW-trained skippers holding Master 200GT or Yachtmaster Offshore, coastal and ocean passages, berth-to-berth service.',
    },
  },
  {
    path: '/about',
    component: AboutView,
    meta: {
      title: 'About Us — Coast 2 Coast Delivery',
      description: 'Meet Jonathan, STCW-trained Master 200GT and RYA Yachtmaster Examiner with tens of thousands of offshore miles, skippering yacht deliveries worldwide.',
    },
  },
  { path: '/training', redirect: '/delivery' },
  {
    path: '/delivery',
    component: DeliveryView,
    meta: {
      title: 'Yacht Delivery Services — Coast 2 Coast Delivery',
      description: 'Expert yacht delivery for coastal and ocean passages. STCW-trained skippers holding Master 200GT or Yachtmaster Offshore, full passage planning, pre-voyage inspection and berth-to-berth service worldwide.',
    },
  },
  {
    path: '/testimonials',
    component: TestimonialsView,
    meta: {
      title: 'Client Reviews — Coast 2 Coast Delivery',
      description: 'Read what yacht owners and crew say about our professional yacht delivery service.',
    },
  },
  {
    path: '/contact',
    component: ContactView,
    meta: {
      title: 'Contact — Coast 2 Coast Delivery',
      description: 'Get in touch to discuss your yacht delivery. Tell us your vessel, route and timing — we respond within 24 hours. Call +44 7713 197047.',
    },
  },
  {
    path: '/terms',
    component: TermsView,
    meta: {
      title: 'Terms & Conditions — Coast 2 Coast Delivery',
      description: 'Terms and conditions for yacht delivery and crew services provided by Coast 2 Coast Training Ltd, trading as Coast 2 Coast Delivery.',
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
