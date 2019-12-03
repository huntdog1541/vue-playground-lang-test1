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
                code: "console.log('Hello, World!);"
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
            }
        }
    };
</script>

<style scoped>

    .editor {
        width: 800px;
        height: 300px;
    }
</style>