/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD0Hc6__IxENhHt0W63C3TIecpP8JW01uE",
  authDomain: "save-link-6fd90.firebaseapp.com",
  projectId: "save-link-6fd90",
  storageBucket: "save-link-6fd90.appspot.com",
  messagingSenderId: "323523187676",
  appId: "1:323523187676:web:b9b3c345e68aa876bdf519",
  measurementId: "G-MBWXNSZHN2"
};

initializeApp(firebaseConfig);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
