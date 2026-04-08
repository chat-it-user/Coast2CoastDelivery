<template>
  <!-- PAGE HERO -->
  <header class="bg-slate-900 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-black uppercase tracking-tight mb-4">{{ t('contact.page_title') }}</h1>
    <p class="text-slate-400 text-lg font-light">{{ t('contact.page_sub') }}</p>
  </header>

  <!-- CONTACT -->
  <section class="bg-slate-100 py-24 px-6">
    <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row">

      <div class="p-12 bg-blue-700 text-white md:w-2/5 flex flex-col justify-center">
        <h3 class="text-3xl font-bold mb-6">{{ t('contact.details_title') }}</h3>
        <div class="space-y-4 text-sm opacity-90">
          <p>📍 {{ t('contact.location') }}</p>
          <p>✉️ support@coast2coast.ltd</p>
          <p>📞 +44 (0)7713 197047</p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="p-12 md:w-3/5 space-y-6">
        <h3 class="text-2xl font-bold text-slate-900">{{ t('contact.form_title') }}</h3>
        <div>
          <label for="contact-name" class="block text-sm font-medium text-slate-600 mb-1">{{ t('contact.name') }}</label>
          <input id="contact-name" v-model="form.name" type="text"
                 class="w-full p-3 border-b-2 border-slate-200 focus:border-blue-500 outline-none transition bg-transparent">
        </div>
        <div>
          <label for="contact-email" class="block text-sm font-medium text-slate-600 mb-1">{{ t('contact.email') }}</label>
          <input id="contact-email" v-model="form.email" type="email"
                 class="w-full p-3 border-b-2 border-slate-200 focus:border-blue-500 outline-none transition bg-transparent">
        </div>
        <div>
          <label for="contact-message" class="block text-sm font-medium text-slate-600 mb-1">{{ t('contact.message') }}</label>
          <textarea id="contact-message" v-model="form.message" rows="4"
                    class="w-full p-3 border-b-2 border-slate-200 focus:border-blue-500 outline-none transition resize-none bg-transparent"></textarea>
        </div>

        <!-- reCAPTCHA -->
        <div class="g-recaptcha" data-sitekey="6LdZsa0sAAAAAIttjM_Jw63XPwme8E68vBYvheV0"></div>

        <p v-if="status === 'error'"    class="text-red-500 text-sm">{{ t('contact.error') }}</p>
        <p v-if="status === 'captcha'"  class="text-red-500 text-sm">Please complete the reCAPTCHA.</p>
        <p v-if="status === 'success'"  class="text-green-600 text-sm font-medium">{{ t('contact.success') }}</p>
        <p v-if="status === 'sendfail'" class="text-red-500 text-sm">{{ t('contact.fail') }}</p>

        <button type="submit" :disabled="sending"
                class="w-full bg-slate-900 text-white font-bold py-4 rounded-sm hover:bg-slate-800 transition uppercase tracking-widest disabled:opacity-50">
          {{ sending ? t('contact.sending') : t('contact.send') }}
        </button>
      </form>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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

  const captchaToken = globalThis.grecaptcha?.getResponse()
  if (!captchaToken) {
    status.value = 'captcha'
    return
  }

  sending.value = true
  status.value  = ''

  try {
    await globalThis.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  form.name,
      from_email: form.email,
      message:    form.message,
      to_email:   'support@coast2coast.ltd',
    })
    status.value = 'success'
    form.name = form.email = form.message = ''
    globalThis.grecaptcha?.reset()
  } catch (err) {
    console.error('EmailJS error:', err)
    status.value = 'sendfail'
    globalThis.grecaptcha?.reset()
  } finally {
    sending.value = false
  }
}
</script>
