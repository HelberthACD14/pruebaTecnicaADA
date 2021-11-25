import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "bootswatch/dist/solar/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount("#app");
