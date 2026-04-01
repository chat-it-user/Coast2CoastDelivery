<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">{{ t('training.page_title') }}</h1>
    <p class="text-slate-400 text-lg font-light">{{ t('training.page_sub') }}</p>
  </header>

  <!-- COURSES -->
  <section class="py-24 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="course in courses" :key="course.title"
           :class="`bg-white rounded-sm shadow-md p-10 border-t-4 ${course.colour} flex flex-col`">
        <div class="text-4xl mb-4">{{ course.icon }}</div>
        <h2 class="text-2xl font-bold text-slate-900 mb-4">{{ course.title }}</h2>
        <p class="text-slate-500 leading-relaxed flex-grow">{{ course.desc }}</p>
        <ul class="mt-6 space-y-2 text-sm text-slate-600">
          <li v-for="point in course.points" :key="point" class="flex gap-2">
            <span :class="`${course.tickColour} font-bold`">✓</span> {{ point }}
          </li>
        </ul>
        <RouterLink :to="`/${course.link}`"
          :class="`mt-8 inline-block text-center ${course.ctaClass} text-white text-sm font-bold py-3 px-6 rounded-sm transition uppercase tracking-widest`">
          {{ course.link === 'delivery' ? t('training.learn_more') : t('training.enquire') }}
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-slate-900 py-16 px-6 text-center">
    <h2 class="text-3xl font-bold text-white mb-4">{{ t('training.cta_title') }}</h2>
    <p class="text-slate-400 mb-8">{{ t('training.cta_sub') }}</p>
    <RouterLink to="/contact" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
      {{ t('training.cta_btn') }}
    </RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const courses = computed(() => tm('training.courses').map((c, i) => ({
  ...c,
  ctaClass: i < 3 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-800 hover:bg-slate-700',
})))
</script>
