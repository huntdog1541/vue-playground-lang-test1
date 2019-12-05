<template>
    <div id="editor">
        <MonacoEditor
            class="editor"
            theme="vs-dark"
            :language="language"
            :options="options"
            v-model="code"
            @change="onChange"
        />
        <button id="submit" @click="onSubmit" >Submit</button>
    </div>
</template>

<script>
    import MonacoEditor from 'vue-monaco'
    export default {
        name: "CodeEditor",
        components: {
            MonacoEditor
        },
        data() {
            return {
                options: {
                    lineNumbers: "on"
                },
                language: "JavaScript",
                code: "console.log('Hello, World!');"
            }
        },
        methods: {
            onChange(value) {
                // eslint-disable-next-line no-console
                console.log(value);
            },
            onSubmit() {
                // eslint-disable-next-line no-console
                console.log("Submitting: " + this.code);
                this.$socket.send(JSON.stringify(this.code));
            },
            logging(message) {
                // eslint-disable-next-line no-console
                console.log(message);
            },
            /*webSocketOpen(event) {
                this.logging('Connection Opened');
                this.logging(event);
                let mess = {type: 'intro'};
                this.webSocket.send(JSON.stringify(mess));
            },
            webSocketMessage(event) {
                this.logging('Message received: ' + event.data);
            },
            webSocketSend(data) {
                this.webSocket.send(JSON.stringify(data));
            }*/
        },
        mounted: function openWebSocket() {
            /*let address = 'ws://' + window.location.hostname + ':4332';
            this.logging('Address: ' + address);

            this.webSocket = new WebSocket(address);
            this.webSocket.addEventListener('open', this.webSocketOpen(event));
            this.webSocket.addEventListener('message', this.webSocketMessage(event));*/

        }
    };
</script>

<style scoped>

    .editor {
        width: 800px;
        height: 300px;
    }
</style>