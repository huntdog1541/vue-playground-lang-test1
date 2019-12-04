<template>
  <div id="app">
    <h1>Language Playground Test1 - Vue</h1>
    <CodeEditor />
    <Terminal />
  </div>
</template>

<script>
import CodeEditor from "@/components/CodeEditor";
import Terminal from "@/components/Terminal";

export default {
  name: 'app',
  components: {
    CodeEditor,
    Terminal
  }
}
</script>

<style>
#app {
  font-family: 'Source Code Pro', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
