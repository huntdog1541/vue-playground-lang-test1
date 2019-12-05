import Vue from 'vue'
import Vuex from 'vuex'
import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONMESSAGE,
  SOCKET_ONERROR,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from "./mutation-types";


Vue.use(Vuex);

/*// eslint-disable-next-line no-unused-vars
const state = {};
// eslint-disable-next-line no-unused-vars
const mutations = {};
// eslint-disable-next-line no-unused-vars
const actions = {};
// eslint-disable-next-line no-unused-vars
const getters = {};*/

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false
    },
    terminal: [],
    outputNumber: 1
  },
  mutations: {
    [SOCKET_ONOPEN](state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
      // eslint-disable-next-line no-console
      console.log("Websocket is opened");
    },
    // eslint-disable-next-line no-unused-vars
    [SOCKET_ONCLOSE](state, event) {
      state.socket.isConnected = false
    },
    [SOCKET_ONMESSAGE](state, message) {
      state.socket.message = message;
    },
    [SOCKET_ONERROR](state, error) {
      // eslint-disable-next-line no-console
      console.error(state, error)
    },
    [SOCKET_RECONNECT](state, count) {
      // eslint-disable-next-line no-console
      console.info(state, count);
    },
    [SOCKET_RECONNECT_ERROR](state) {
      state.socket.reconnectError = true;
    },
    incrementLineId (state) {
      state.outputNumber++;
    }
  },
  actions: {
    sendMessage: function(context, message) {
      Vue.prototype.$socket.send(message);
    },
    addToTerminal: function(context,message) {
      //let str = this.state.outputNumber.toString() + ': ' + message.message + '\n';
      // eslint-disable-next-line no-console
      console.log("Message received: " + message.message);
      let line = { id: this.state.outputNumber, line: message.message };
      context.commit('incrementLineId');
      this.state.terminal.push(line);
    }
  },
  modules: {
  }
})
