<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">Passage Delivery</h1>
    <p class="text-slate-400 text-lg font-light max-w-2xl mx-auto">
      We deliver your yacht safely to its destination with professional skippers. Here is everything you need to know before we set sail.
    </p>
  </header>

  <!-- CARDS -->
  <section class="py-24 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- What's Involved -->
      <div class="bg-white rounded-sm shadow-md border-t-4 border-blue-600 p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span class="text-2xl">⛵</span> What's Involved
        </h3>
        <ul class="space-y-3 text-slate-600 text-sm">
          <li v-for="item in involved" :key="item" class="flex gap-2">
            <span class="text-blue-500 font-bold mt-0.5">✓</span><span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Kit List -->
      <div class="bg-white rounded-sm shadow-md border-t-4 border-blue-400 p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span class="text-2xl">🏫</span> Personal Kit List
        </h3>
        <ul class="space-y-3 text-slate-600 text-sm">
          <li v-for="item in kitList" :key="item" class="flex gap-2">
            <span class="text-blue-400 font-bold mt-0.5">▪</span><span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Pre-Voyage Inspection -->
      <div class="bg-white rounded-sm shadow-md border-t-4 border-slate-700 p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span class="text-2xl">📋</span> Pre-Voyage Inspection
        </h3>
        <p class="text-slate-500 text-xs mb-4 italic">All items below are checked and verified by our skipper before departure.</p>
        <ul class="space-y-3 text-slate-600 text-sm">
          <li v-for="item in inspection" :key="item" class="flex gap-2">
            <span class="text-slate-700 font-bold mt-0.5">■</span><span>{{ item }}</span>
          </li>
        </ul>
      </div>

    </div>

    <div class="mt-12 text-center">
      <RouterLink to="/contact" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm">
        Enquire About Delivery
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const involved = [
  'Full passage planning and weather routing before departure',
  '24/7 watch-keeping rota with experienced crew',
  'Regular position reports and communication with the owner',
  'Full vessel log maintained throughout the passage',
  'Detailed handover report on arrival',
  'Option to join as crew and gain offshore miles',
  'Skipper holds professional qualifications and offshore experience',
]

const kitList = [
  'Offshore lifejacket (150N minimum, with light & whistle)',
  'Safety harness and crotch strap tether',
  'Offshore sailing jacket and trousers (waterproof)',
  'Thermal base layers and fleece mid-layer',
  'Sea boots and non-slip deck shoes',
  'Warm hat, gloves and buff/neck warmer',
  'Headtorch with spare batteries',
  'Personal medication and seasickness remedy',
  'Sleeping bag suitable for offshore temperatures',
  'Passport / ID and any required visas',
]

const inspection = [
  'EPIRB — registered, in date and operational',
  'Life raft — serviced, in date and correctly mounted',
  'Flares — full set, in date and stowed accessibly',
  'Fire extinguishers — charged and correctly located',
  'Lifejackets — one per crew, serviced and fitted',
  'Jack lines, tethers and harness points checked',
  'Dan buoy and horseshoe lifebuoy with drogue',
  'VHF radio (DSC capable) — tested and registered',
  'GPS / chartplotter — charts up to date',
  'Bilge pumps — manual and electric tested',
  'First aid kit — fully stocked and accessible',
  'Storm sails — available and rigged for deployment',
]
</script>
