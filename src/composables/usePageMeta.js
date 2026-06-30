import { useI18n } from 'vue-i18n'

/**
 * Composable to dynamically set page meta tags (title, description)
 * Used in each view to customize SEO for that page
 */
export function usePageMeta(title, description) {
  const { locale } = useI18n()
  
  // Update document title
  document.title = title
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = description
  
  // Update Open Graph tags
  updateOGTag('og:title', title)
  updateOGTag('og:description', description)
  
  // Update Twitter Card tags
  updateTwitterTag('twitter:title', title)
  updateTwitterTag('twitter:description', description)
}

function updateOGTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.content = content
}

function updateTwitterTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.name = name
    document.head.appendChild(tag)
  }
  tag.content = content
}
