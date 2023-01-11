import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./assets/css/main.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter)


createApp(App, ).use(router).mount("#app");

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");




