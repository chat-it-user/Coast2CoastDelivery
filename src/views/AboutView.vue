<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">{{ t('about.page_title') }}</h1>
    <p class="text-slate-400 text-lg font-light">{{ t('about.page_sub') }}</p>
  </header>

  <!-- FOUNDER -->
  <section class="py-24 px-6 max-w-4xl mx-auto">
    <div class="flex flex-col md:flex-row gap-12 items-start">

      <!-- Photo -->
      <div class="w-full md:w-1/3 flex-shrink-0">
        <img src="/src/assets/jonathan.jpeg" alt="Jonathan — Founder & Lead Instructor" class="rounded-full w-full object-cover aspect-square shadow-md">
      </div>

      <!-- Bio -->
      <div class="flex-1">
        <p class="text-xs uppercase tracking-widest text-blue-500 font-bold mb-2">Founder &amp; Lead Instructor</p>
        <h2 class="text-4xl font-black text-slate-900 mb-6">Jonathan</h2>
        <p class="text-slate-600 leading-relaxed mb-4">{{ t('about.bio_p1') }}</p>
        <p class="text-slate-600 leading-relaxed mb-4">{{ t('about.bio_p2') }}</p>
        <p class="text-slate-600 leading-relaxed mb-8">{{ t('about.bio_p3') }}</p>

        <h3 class="text-lg font-bold text-slate-800 mb-4">{{ t('about.cred_title') }}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-slate-100 rounded-sm p-4 border-l-4 border-blue-500">
            <p class="font-bold text-slate-800">{{ t('about.cred_1_title') }}</p>
            <p class="text-sm text-slate-500">{{ t('about.cred_1_desc') }}</p>
          </div>
          <div class="bg-slate-100 rounded-sm p-4 border-l-4 border-blue-500">
            <p class="font-bold text-slate-800">{{ t('about.cred_2_title') }}</p>
            <p class="text-sm text-slate-500">{{ t('about.cred_2_desc') }}</p>
          </div>
          <div class="bg-slate-100 rounded-sm p-4 border-l-4 border-slate-700">
            <p class="font-bold text-slate-800">{{ t('about.cred_3_title') }}</p>
            <p class="text-sm text-slate-500">{{ t('about.cred_3_desc') }}</p>
          </div>
          <div class="bg-slate-100 rounded-sm p-4 border-l-4 border-slate-700">
            <p class="font-bold text-slate-800">{{ t('about.cred_4_title') }}</p>
            <p class="text-sm text-slate-500">{{ t('about.cred_4_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPANY NOTE -->
  <section class="bg-slate-100 py-16 px-6 text-center">
    <div class="max-w-2xl mx-auto">
      <p class="text-slate-500 italic text-lg leading-relaxed">{{ t('about.disclaimer') }}</p>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-slate-900 py-16 px-6 text-center">
    <RouterLink to="/contact" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
      {{ t('about.cta') }}
    </RouterLink>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
