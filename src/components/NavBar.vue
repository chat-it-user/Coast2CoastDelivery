<template>
  <nav class="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
    <div class="flex justify-between items-center px-6 py-4">
      <RouterLink to="/" class="text-xl font-bold tracking-tighter">
        COAST 2 COAST <span class="text-blue-400 font-light underline decoration-1">TRAINING</span>
      </RouterLink>

      <!-- Desktop links -->
      <div class="hidden md:flex space-x-8 font-medium">
        <RouterLink to="/about"    class="hover:text-blue-400 transition" active-class="text-blue-400">About</RouterLink>
        <RouterLink to="/training" class="hover:text-blue-400 transition" active-class="text-blue-400">Training</RouterLink>
        <RouterLink to="/delivery" class="hover:text-blue-400 transition" active-class="text-blue-400">Delivery</RouterLink>
        <RouterLink to="/contact"  class="hover:text-blue-400 transition" active-class="text-blue-400">Contact</RouterLink>
      </div>

      <!-- Mobile hamburger -->
      <button type="button" @click="open = !open" class="md:hidden focus:outline-none" aria-label="Toggle menu">
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="open" class="md:hidden bg-slate-800 px-6 pb-4 space-y-3 font-medium">
      <RouterLink to="/about"    @click="open = false" class="block hover:text-blue-400 transition py-2 border-b border-slate-700" active-class="text-blue-400">About</RouterLink>
      <RouterLink to="/training" @click="open = false" class="block hover:text-blue-400 transition py-2 border-b border-slate-700" active-class="text-blue-400">Training</RouterLink>
      <RouterLink to="/delivery" @click="open = false" class="block hover:text-blue-400 transition py-2 border-b border-slate-700" active-class="text-blue-400">Delivery</RouterLink>
      <RouterLink to="/contact"  @click="open = false" class="block hover:text-blue-400 transition py-2" active-class="text-blue-400">Contact</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()

// Close mobile menu on route change
watch(() => route.path, () => { open.value = false })
</script>
