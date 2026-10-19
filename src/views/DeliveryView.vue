<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">{{ t('delivery.page_title') }}</h1>
    <p class="text-slate-400 text-lg font-light max-w-2xl mx-auto">{{ t('delivery.page_sub') }}</p>
  </header>

  <!-- HOW IT WORKS -->
  <section class="pt-24 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">{{ t('delivery.steps_title') }}</h2>
      <ol class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <li v-for="(step, i) in tm('delivery.steps')" :key="step.title" class="text-center">
          <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 text-white font-black text-xl flex items-center justify-center">{{ i + 1 }}</div>
          <h3 class="font-bold text-slate-900 mb-2">{{ step.title }}</h3>
          <p class="text-slate-500 text-sm">{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>

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
          <span class="text-2xl">🎒</span> {{ t('delivery.kit_title') }}
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

  <!-- PROFESSIONAL CREW SECTION -->
  <section class="py-24 px-6 bg-blue-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-slate-900 mb-4">{{ t('delivery.crew_title') }}</h2>
      <p class="text-slate-600 text-lg leading-relaxed mb-8">{{ t('delivery.crew_desc') }}</p>
      <RouterLink to="/contact" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
        {{ t('delivery.crew_cta') }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '../composables/usePageMeta'

const { t, tm } = useI18n()

usePageMeta(
  'Yacht Delivery Services — Coast 2 Coast Delivery',
  'Expert yacht delivery for coastal and ocean passages. STCW-trained skippers holding Master 200GT or Yachtmaster Offshore, full passage planning, pre-voyage inspection and berth-to-berth service worldwide.'
)
</script>
