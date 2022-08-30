<template>
  <div>
    <div id="sakana-box" class="sakana-box" v-bind:style="styleObject"></div>
    <script v-html="initSakanaWidget"></script>
    <script
      async
      onload="initSakanaWidget()"
      src="https://cdn.jsdelivr.net/npm/sakana"
    ></script>
  </div>
</template>

<script>
export default {
  name: "SakanaWidgetPlugin",

  computed: {
    options() {
      return JSON.parse ? JSON.parse(OPTIONS) : OPTIONS;
    },
    styleObject() {
      return this.options.styleObject;
    },
    initSakanaWidget() {
      return (
        "function initSakanaWidget() {Sakana.init(" +
        JSON.stringify(this.options.config) +
        ");}"
      );
    },
  },
};
</script>
