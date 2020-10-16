<template>
  <div id="app">
    <h1>HELLO GUYS</h1>
    <layout />
  </div>
</template>

<script>
import layout from "./components/layout";
export default {
  name: "App",
  components: {
    layout,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
