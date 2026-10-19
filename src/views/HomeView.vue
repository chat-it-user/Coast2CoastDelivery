<template>
  <!-- HERO -->
  <header class="hero-gradient min-h-screen flex items-center justify-center text-center text-white px-4">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tight">
        {{ t('home.hero_title') }}
      </h1>
      <p class="text-xl md:text-2xl text-white mb-10">
        {{ t('home.hero_sub') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/delivery" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
          {{ t('home.cta_delivery') }}
        </RouterLink>
        <RouterLink to="/contact" class="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
          {{ t('home.cta_contact') }}
        </RouterLink>
      </div>
    </div>
  </header>

  <!-- HIGHLIGHTS -->
  <section class="py-20 px-6 bg-slate-100">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-slate-900 mb-4">{{ t('home.highlights_title') }}</h2>
      <p class="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">{{ t('home.highlights_sub') }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in tm('home.highlights')" :key="item.title" class="bg-white rounded-sm shadow-sm p-6 border-t-4 border-blue-500">
          <div class="text-3xl mb-3">{{ item.icon }}</div>
          <h3 class="font-bold text-slate-900 mb-2">{{ item.title }}</h3>
          <p class="text-slate-500 text-sm">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- QUICK LINKS -->
  <section class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <RouterLink to="/about" class="group p-8 rounded-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition">
        <div class="text-4xl mb-4">&#9875;</div>
        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{{ t('home.card_about_title') }}</h3>
        <p class="text-slate-500 text-sm">{{ t('home.card_about_desc') }}</p>
      </RouterLink>
      <RouterLink to="/delivery" class="group p-8 rounded-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition">
        <div class="text-4xl mb-4">&#127758;</div>
        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{{ t('home.card_delivery_title') }}</h3>
        <p class="text-slate-500 text-sm">{{ t('home.card_delivery_desc') }}</p>
      </RouterLink>
      <RouterLink to="/testimonials" class="group p-8 rounded-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition">
        <div class="text-4xl mb-4">&#11088;</div>
        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{{ t('home.card_reviews_title') }}</h3>
        <p class="text-slate-500 text-sm">{{ t('home.card_reviews_desc') }}</p>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '../composables/usePageMeta'

const { t, tm } = useI18n()

usePageMeta(
  'Coast 2 Coast Delivery — Professional Yacht Delivery Worldwide',
  'Professional skippered yacht delivery worldwide. STCW-trained skippers holding Master 200GT or Yachtmaster Offshore, coastal and ocean passages, berth-to-berth service.'
)
</script>
