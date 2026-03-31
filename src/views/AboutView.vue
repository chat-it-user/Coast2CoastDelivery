<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">About &amp; Team</h1>
    <p class="text-slate-400 text-lg font-light">The people behind Coast 2 Coast Training Ltd</p>
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
        <p class="text-slate-600 leading-relaxed mb-4">
          Jonathan has been in the marine industry for over 20 years. A former Royal Marine, he brings exceptional discipline, seamanship and offshore experience to every course and delivery passage.
        </p>
        <p class="text-slate-600 leading-relaxed mb-4">
          He is a qualified Yachtmaster Instructor for both sail and power, and also serves as an examiner for sail — meaning he understands exactly what examiners are looking for and how to prepare you for success.
        </p>
        <p class="text-slate-600 leading-relaxed mb-8">
          Whether you are preparing for your first ICC test or looking to build serious offshore miles, Jonathan tailors every session to your level and goals.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="cred in credentials" :key="cred.title" :class="`bg-slate-100 rounded-sm p-4 border-l-4 ${cred.colour}`">
            <p class="text-xs uppercase tracking-widest text-slate-500 mb-1">{{ cred.label }}</p>
            <p class="font-bold text-slate-800">{{ cred.title }}</p>
            <p class="text-sm text-slate-500">{{ cred.sub }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPANY NOTE -->
  <section class="bg-slate-100 py-16 px-6 text-center">
    <div class="max-w-2xl mx-auto">
      <p class="text-slate-500 italic text-lg leading-relaxed">
        *Coast 2 Coast Training Ltd is an independent maritime coaching firm. We are not affiliated with the RYA. Our training is based on professional delivery standards and real-world offshore experience.
      </p>
      <p class="text-xs text-slate-400 mt-4">Registered in England &amp; Wales &middot; Company No. 16278430</p>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-slate-900 py-16 px-6 text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
    <p class="text-slate-400 mb-8">Get in touch to discuss your training goals.</p>
    <RouterLink to="/contact" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
      Contact Us
    </RouterLink>
  </section>
</template>

<script setup>
const credentials = [
  { label: 'Qualification', title: 'Yachtmaster Instructor', sub: 'Sail & Power',           colour: 'border-blue-500' },
  { label: 'Qualification', title: 'Yachtmaster Examiner',   sub: 'Sail',                   colour: 'border-blue-500' },
  { label: 'Background',    title: 'Former Royal Marine',    sub: 'Discipline & leadership', colour: 'border-slate-700' },
  { label: 'Experience',    title: '20+ Years',              sub: 'Marine industry',         colour: 'border-slate-700' },
]
</script>
