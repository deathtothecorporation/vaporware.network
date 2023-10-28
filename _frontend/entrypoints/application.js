// To see this message, follow the instructions for your Ruby framework.
//
// When using a plain API, perhaps it's better to generate an HTML entrypoint
// and link to the scripts and stylesheets, and let Vite transform it.
console.log('Vite ⚡️ Ruby')

// Example: Import a stylesheet in <sourceCodeDir>/index.css
// import '~/index.css'

import '~/src/assets/index.scss'

import { createApp } from 'vue'
import App from '~/src/App.vue'
import Post from '~/src/Post.vue'
import Cta from '~/src/components/Cta.vue'

const app = createApp(App)
app.component("CTA", Cta);
app.mount('#app')

const postElement = document.querySelector('#post')

if (postElement) {
  const title = postElement.dataset.title
  const content = postElement.dataset.content
  const post = createApp(Post, {
    title, content
  });
  post.mount('#post')
}
