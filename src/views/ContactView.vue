<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">Get in Touch</h1>
    <p class="text-slate-400 text-lg font-light">Ready to start your journey? Our skippers are standing by.</p>
  </header>

  <!-- CONTACT -->
  <section class="bg-slate-100 py-24 px-6">
    <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row">

      <div class="p-12 bg-blue-700 text-white md:w-2/5 flex flex-col justify-center">
        <h3 class="text-3xl font-bold mb-6">Contact Details</h3>
        <p class="text-blue-100 mb-8">We are happy to discuss your training goals or delivery requirements.</p>
        <div class="space-y-4 text-sm opacity-90">
          <p>📍 Le Havre / Global</p>
          <p>✉️ info@coast2coasttraining.co.uk</p>
          <p>📞 07713 197047</p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="p-12 md:w-3/5 space-y-6">
        <div>
          <label for="contact-name" class="block text-sm font-medium text-slate-600 mb-1">Name</label>
          <input id="contact-name" v-model="form.name" type="text"
                 class="w-full p-3 border-b-2 border-slate-200 focus:border-blue-500 outline-none transition bg-transparent">
        </div>
        <div>
          <label for="contact-email" class="block text-sm font-medium text-slate-600 mb-1">Email</label>
          <input id="contact-email" v-model="form.email" type="email"
                 class="w-full p-3 border-b-2 border-slate-200 focus:border-blue-500 outline-none transition bg-transparent">
        </div>
        <div>
          <label for="contact-message" class="block text-sm font-medium text-slate-600 mb-1">Message</label>
          <textarea id="contact-message" v-model="form.message" rows="4"
                    class="w-full p-3 border-b-2 border-slate-200 focus:border-blue-500 outline-none transition resize-none bg-transparent"></textarea>
        </div>

        <p v-if="status === 'error'"     class="text-red-500 text-sm">Please fill in all fields.</p>
        <p v-if="status === 'success'"   class="text-green-600 text-sm font-medium">Message sent! We will be in touch shortly.</p>
        <p v-if="status === 'sendfail'"  class="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>

        <button type="submit" :disabled="sending"
                class="w-full bg-slate-900 text-white font-bold py-4 rounded-sm hover:bg-slate-800 transition uppercase tracking-widest disabled:opacity-50">
          {{ sending ? 'Sending…' : 'Send Message' }}
        </button>
      </form>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const EMAILJS_PUBLIC_KEY  = 'm6ktYj3SzgbBKEmbo'
const EMAILJS_SERVICE_ID  = 'service_uc2u5fw'
const EMAILJS_TEMPLATE_ID = 'template_ai2j0yv'

const form    = reactive({ name: '', email: '', message: '' })
const status  = ref('')
const sending = ref(false)

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) {
    status.value = 'error'
    return
  }

  sending.value = true
  status.value  = ''

  try {
    // emailjs is loaded via CDN in index.html
    await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  form.name,
      from_email: form.email,
      message:    form.message,
    })
    status.value = 'success'
    form.name = form.email = form.message = ''
  } catch (err) {
    console.error('EmailJS error:', err)
    status.value = 'sendfail'
  } finally {
    sending.value = false
  }
}
</script>
