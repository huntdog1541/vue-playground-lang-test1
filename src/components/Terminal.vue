<template>
    <div>
        <div>
            <ul id="terminal">
                <li v-for="line in lines" v-bind:key="line.id">{{line.id}}: {{line.line}}</li>
            </ul>
        </div>
        <!-- <textarea id="terminal" v-bind="lines" placeholder="Output" readonly="true">{{ lines.id }}: {{ lines.line }}</textarea> -->
    </div>
</template>

<script>
    export default {
        name: "Terminal",
        computed: {
            lines() {
                return this.$store.state.terminal.concat();
            }
        }
    }
</script>

<style scoped>
    #terminal {
        width: 800px;
        height: 300px;
        border: solid 1px black;
        list-style-type: none;
        padding-inline-start: 0;
    }

    #terminal ul {

    }

    li {
        padding: 0;
        text-align: left;
    }
</style>