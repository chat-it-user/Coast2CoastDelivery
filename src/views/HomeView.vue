<template>
  <!-- HERO -->
  <header class="hero-gradient min-h-screen flex items-center justify-center text-center text-white px-4">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tight">
        {{ t('home.hero_title') }}
      </h1>
      <p class="text-xl md:text-2xl text-slate-300 mb-10 font-light">
        {{ t('home.hero_sub') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/training" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
          {{ t('home.cta_courses') }}
        </RouterLink>
        <RouterLink to="/contact" class="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
          {{ t('home.cta_contact') }}
        </RouterLink>
      </div>
    </div>
  </header>

  <!-- QUICK LINKS -->
  <section class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <RouterLink to="/about" class="group p-8 rounded-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition">
        <div class="text-4xl mb-4">&#9875;</div>
        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{{ t('home.card_about_title') }}</h3>
        <p class="text-slate-500 text-sm">{{ t('home.card_about_desc') }}</p>
      </RouterLink>
      <RouterLink to="/training" class="group p-8 rounded-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition">
        <div class="text-4xl mb-4">&#127759;</div>
        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{{ t('home.card_training_title') }}</h3>
        <p class="text-slate-500 text-sm">{{ t('home.card_training_desc') }}</p>
      </RouterLink>
      <RouterLink to="/delivery" class="group p-8 rounded-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition">
        <div class="text-4xl mb-4">&#127758;</div>
        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{{ t('home.card_delivery_title') }}</h3>
        <p class="text-slate-500 text-sm">{{ t('home.card_delivery_desc') }}</p>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
