<template>
  <footer class="bg-slate-950 text-slate-400 py-10 px-6 text-sm">
    <!-- Partners -->
    <div class="max-w-6xl mx-auto mb-10 pb-10 border-b border-slate-800">
      <p class="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 text-center md:text-left">{{ t('footer.partners_title') }}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a v-for="p in partners" :key="p.key" :href="p.url" target="_blank" rel="noopener"
           class="group flex items-center justify-between gap-4 rounded-sm border border-slate-800 bg-slate-900 p-5 hover:border-blue-500 transition">
          <div>
            <p class="text-white font-bold text-base">{{ p.name }}</p>
            <p class="mt-1">{{ t(`footer.partners.${p.key}`) }}</p>
          </div>
          <span class="flex-shrink-0 text-blue-400 font-bold uppercase tracking-widest text-xs group-hover:text-blue-300 transition">
            {{ t('footer.partners_cta') }} &rarr;
          </span>
        </a>
      </div>
    </div>

    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <span class="text-white font-bold tracking-tighter">
          COAST 2 COAST <span class="text-blue-400 font-light">DELIVERY</span>
        </span>
        <p class="mt-1">{{ t('footer.registered') }}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <RouterLink to="/about"        class="hover:text-white transition">{{ t('nav.about') }}</RouterLink>
        <RouterLink to="/delivery"     class="hover:text-white transition">{{ t('nav.delivery') }}</RouterLink>
        <RouterLink to="/testimonials" class="hover:text-white transition">{{ t('nav.testimonials') }}</RouterLink>
        <RouterLink to="/contact"      class="hover:text-white transition">{{ t('nav.contact') }}</RouterLink>
        <RouterLink to="/terms"        class="hover:text-white transition">Terms</RouterLink>
      </div>
      <p>{{ t('footer.copyright', { year }) }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const year = new Date().getFullYear()

const partners = [
  { key: 'fox',  name: "Fox's Yacht Sales",   url: 'https://www.foxsyachts.co.uk/used-boats-for-sale/' },
  { key: 'sea',  name: 'Sail Europe Academy', url: 'https://saileuropeacademy.com/' },
]
</script>
