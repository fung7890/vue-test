import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: 'hubinit.eu.auth0.com',
    clientId: 'Dru6kRd9ZdFboL5bGBvDnvSWxwGYpOFM',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  })
);

app.mount('#app');
