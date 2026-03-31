<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">Our Courses</h1>
    <p class="text-slate-400 text-lg font-light">Practical, hands-on training built around real offshore passages.</p>
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
        <RouterLink :to="course.cta.to"
          :class="`mt-8 inline-block text-center ${course.ctaClass} text-white text-sm font-bold py-3 px-6 rounded-sm transition uppercase tracking-widest`">
          {{ course.cta.label }}
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-slate-900 py-16 px-6 text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Not sure which course is right for you?</h2>
    <p class="text-slate-400 mb-8">Get in touch and we will help you find the best fit for your goals.</p>
    <RouterLink to="/contact" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
      Contact Us
    </RouterLink>
  </section>
</template>

<script setup>
const courses = [
  {
    icon: '⛵', title: 'ICC Training', colour: 'border-blue-400', tickColour: 'text-blue-500',
    ctaClass: 'bg-blue-600 hover:bg-blue-500', cta: { to: '/contact', label: 'Enquire' },
    desc: 'Receive training for the required skills to pass your basic tests. All training is provided on your own boat, meaning you learn in a familiar environment and build real confidence at the helm.',
    points: ['Training on your own vessel', 'Covers all required ICC competencies', 'Suitable for sail and power'],
  },
  {
    icon: '🌏', title: 'Coastal Passage Training', colour: 'border-blue-500', tickColour: 'text-blue-500',
    ctaClass: 'bg-blue-600 hover:bg-blue-500', cta: { to: '/contact', label: 'Enquire' },
    desc: 'Build confidence on extended coastal and offshore passages. Hands-on training covering pilotage, tidal planning, and night sailing — designed to prepare you for real-world conditions.',
    points: ['Tidal planning and pilotage', 'Night sailing included', 'Real offshore passage experience'],
  },
  {
    icon: '🌊', title: 'Exam Preparation', colour: 'border-blue-600', tickColour: 'text-blue-500',
    ctaClass: 'bg-blue-600 hover:bg-blue-500', cta: { to: '/contact', label: 'Enquire' },
    desc: 'Intensive real-world preparation for professional maritime exams. Taught by a qualified examiner who knows exactly what is required to pass with confidence.',
    points: ['Taught by a qualified Yachtmaster Examiner', 'Practical skills focus', 'Exam technique and confidence building'],
  },
  {
    icon: '🌎', title: 'Delivery Passages', colour: 'border-slate-700', tickColour: 'text-slate-700',
    ctaClass: 'bg-slate-800 hover:bg-slate-700', cta: { to: '/delivery', label: 'Learn More' },
    desc: 'Join our professional skippers on live delivery legs. Gain offshore miles and real experience across ocean passages — the most effective way to build sea time towards a professional qualification.',
    points: ['Real offshore miles logged', 'Sail with professional skippers', 'Ocean and coastal passages'],
  },
]
</script>
