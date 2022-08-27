<template>
  <div>
    <div id="sakana-widget"></div>
    <script v-html="initSakanaWidget"></script>
    <script
      async
      onload="initSakanaWidget()"
      src="https://cdn.jsdelivr.net/npm/sakana-widget@1.0.0/lib/sakana.min.js"
    ></script>
  </div>
</template>

<script>
// import SakanaWidget from "sakana-widget";

export default {
  name: "SakanaWidgetPlugin",

  props: {
    character: {
      type: String,
      default: "chisato",
    },
  },

  computed: {
    initSakanaWidget() {
      return (
        'function initSakanaWidget() {SakanaWidget({ defaultCharacter: "' +
        this.character +
        '" });}'
      );
    },
  },

  // mounted() {
  //   window.addEventListener("DOMContentLoaded", () => {
  //     SakanaWidget({ defaultCharacter: "chisato" });
  //   });
  // },
};
</script>

 <style>
#sakana-widget {
  position: fixed;
  left: 24px;
  bottom: 24px;
}
</style>
