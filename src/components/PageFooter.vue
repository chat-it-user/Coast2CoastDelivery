<template>
  <footer class="bg-slate-950 text-slate-400 py-10 px-6 text-sm">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <span class="text-white font-bold tracking-tighter">
          COAST 2 COAST <span class="text-blue-400 font-light">TRAINING</span>
        </span>
        <p class="mt-1">{{ t('footer.registered') }}</p>
      </div>
      <div class="flex space-x-6">
        <RouterLink to="/about"    class="hover:text-white transition">{{ t('nav.about') }}</RouterLink>
        <RouterLink to="/training" class="hover:text-white transition">{{ t('nav.training') }}</RouterLink>
        <RouterLink to="/contact"  class="hover:text-white transition">{{ t('nav.contact') }}</RouterLink>
      </div>
      <p>{{ t('footer.copyright', { year }) }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>
