<template>
  <footer class="bg-slate-950 text-slate-400 py-10 px-6 text-sm">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <span class="text-white font-bold tracking-tighter">
          COAST 2 COAST <span class="text-blue-400 font-light">TRAINING</span>
        </span>
        <p class="mt-1">Registered in England &amp; Wales &middot; Company No. 16278430</p>
      </div>
      <div class="flex space-x-6">
        <RouterLink to="/about"    class="hover:text-white transition">About</RouterLink>
        <RouterLink to="/training" class="hover:text-white transition">Training</RouterLink>
        <RouterLink to="/contact"  class="hover:text-white transition">Contact</RouterLink>
      </div>
      <p>&copy; {{ year }} Coast 2 Coast Training Ltd</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
