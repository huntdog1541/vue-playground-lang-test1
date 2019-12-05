import Vue from 'vue'
import Vuex from 'vuex'
import {
    SOCKET_ONOPEN,
    SOCKET_ONCLOSE,
    SOCKET_ONERROR,
    SOCKET_ONMESSAGE,
    SOCKET_RECONNECT,
    SOCKET_RECONNECT_ERROR
} from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false,
        },
        terminal: [],
        outputNumber: 1,
        message: ''
    },
    mutations: {
        // eslint-disable-next-line no-unused-vars
        [SOCKET_ONOPEN](state, event)  {
            // eslint-disable-next-line no-console
            console.log("Websocket is connected!");
            state.socket.isConnected = true
        },
        // eslint-disable-next-line no-unused-vars
        [SOCKET_ONCLOSE](state, event)  {
            // eslint-disable-next-line no-console
            console.log("Websocket is closed");
            state.socket.isConnected = false
        },
        [SOCKET_ONERROR](state, event)  {
            // eslint-disable-next-line no-console
            console.error(state, event)
        },
        // default handler called for all methods
        [SOCKET_ONMESSAGE](state, message)  {
            state.socket.message = message
        },
        // mutations for reconnect methods
        [SOCKET_RECONNECT](state, count) {
            // eslint-disable-next-line no-console
            console.info(state, count)
        },
        [SOCKET_RECONNECT_ERROR](state) {
            state.socket.reconnectError = true;
        },
        storeMessage(state, message){
            state.message = message;
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        addToTerminal(context, message) {
            // eslint-disable-next-line no-console
            console.log("Message: " + message);
            context.commit('storeMessage', message);
        },
        echo(context, message) {
            // eslint-disable-next-line no-console
            console.log("Echo: " + message.message);
        }

    }
})