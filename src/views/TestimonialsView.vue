<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">{{ t('testimonials.page_title') }}</h1>
    <p class="text-slate-400 text-lg font-light">{{ t('testimonials.page_sub') }}</p>
  </header>

  <!-- TESTIMONIALS CAROUSEL -->
  <section class="py-24 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div ref="track" @scroll="updateArrows"
           class="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 no-scrollbar">
        <div v-for="testimonial in tm('testimonials.testimonials')" :key="testimonial.text"
             class="snap-start shrink-0 w-[85%] md:w-[calc(50%-1rem)] bg-slate-50 rounded-sm shadow-md p-8 border-l-4 border-blue-500 flex flex-col">

          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span v-for="i in testimonial.rating" :key="`star-${i}`" class="text-yellow-400 text-lg">★</span>
          </div>

          <!-- Quote -->
          <p class="text-slate-700 leading-relaxed flex-grow mb-6 italic">{{ testimonial.text }}</p>

          <!-- Author -->
          <div class="border-t border-slate-200 pt-4">
            <p class="font-bold text-slate-900">{{ testimonial.name }}</p>
            <p class="text-sm text-slate-500">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <div v-if="canPrev || canNext" class="flex justify-center gap-4 mt-6">
        <button type="button" @click="scrollBy(-1)" :disabled="!canPrev" aria-label="Previous reviews"
                class="w-12 h-12 rounded-full border-2 border-slate-300 text-slate-700 text-xl hover:border-blue-500 hover:text-blue-600 transition disabled:opacity-30 disabled:pointer-events-none">&larr;</button>
        <button type="button" @click="scrollBy(1)" :disabled="!canNext" aria-label="Next reviews"
                class="w-12 h-12 rounded-full border-2 border-slate-300 text-slate-700 text-xl hover:border-blue-500 hover:text-blue-600 transition disabled:opacity-30 disabled:pointer-events-none">&rarr;</button>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-slate-900 py-16 px-6 text-center">
    <h2 class="text-3xl font-bold text-white mb-4">{{ t('testimonials.cta_title') }}</h2>
    <p class="text-slate-400 mb-8">{{ t('testimonials.cta_sub') }}</p>
    <RouterLink to="/contact" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
      {{ t('testimonials.cta_btn') }}
    </RouterLink>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '../composables/usePageMeta'

const { t, tm } = useI18n()

usePageMeta(
  'Client Reviews — Coast 2 Coast Delivery',
  'Read what yacht owners and crew say about our professional yacht delivery service.'
)

const track   = ref(null)
const canPrev = ref(false)
const canNext = ref(false)

function updateArrows() {
  const el = track.value
  if (!el) return
  canPrev.value = el.scrollLeft > 4
  canNext.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
}

// Scroll by one card (card width + gap)
function scrollBy(dir) {
  const el = track.value
  const card = el.firstElementChild
  el.scrollBy({ left: dir * (card.offsetWidth + 32) })
}

let observer
onMounted(() => {
  updateArrows()
  observer = new ResizeObserver(updateArrows)
  observer.observe(track.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>
