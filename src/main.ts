import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';


const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue)
app.component('Menubar', Menubar)

app.mount("#app");

