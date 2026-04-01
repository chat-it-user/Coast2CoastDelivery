<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">{{ t('delivery.page_title') }}</h1>
    <p class="text-slate-400 text-lg font-light max-w-2xl mx-auto">{{ t('delivery.page_sub') }}</p>
  </header>

  <!-- CARDS -->
  <section class="py-24 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- What's Involved -->
      <div class="bg-white rounded-sm shadow-md border-t-4 border-blue-600 p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span class="text-2xl">⛵</span> {{ t('delivery.involved_title') }}
        </h3>
        <ul class="space-y-3 text-slate-600 text-sm">
          <li v-for="item in tm('delivery.involved')" :key="item" class="flex gap-2">
            <span class="text-blue-500 font-bold mt-0.5">✓</span><span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Kit List -->
      <div class="bg-white rounded-sm shadow-md border-t-4 border-blue-400 p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span class="text-2xl">🏫</span> {{ t('delivery.kit_title') }}
        </h3>
        <ul class="space-y-3 text-slate-600 text-sm">
          <li v-for="item in tm('delivery.kit')" :key="item" class="flex gap-2">
            <span class="text-blue-400 font-bold mt-0.5">▪</span><span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Pre-Voyage Inspection -->
      <div class="bg-white rounded-sm shadow-md border-t-4 border-slate-700 p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span class="text-2xl">📋</span> {{ t('delivery.inspection_title') }}
        </h3>
        <ul class="space-y-3 text-slate-600 text-sm">
          <li v-for="item in tm('delivery.inspection')" :key="item" class="flex gap-2">
            <span class="text-slate-700 font-bold mt-0.5">■</span><span>{{ item }}</span>
          </li>
        </ul>
      </div>

    </div>

    <div class="mt-12 text-center">
      <RouterLink to="/contact" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
        {{ t('delivery.enquire') }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
</script>
