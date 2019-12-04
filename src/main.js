import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueNativeSocket from 'vue-native-websocket';
import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from './store/mutation-types';

const mutations = {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
};

Vue.use(VueNativeSocket, 'ws://localhost:4332', { store: store, mutations: mutations, format: 'json',
  reconnection: true,
  reconnectionAttempt: 5,
  reconnectionDelay: 3000
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
