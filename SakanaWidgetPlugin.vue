<template>
  <div>
    <div id="sakana-box" class="sakana-box"></div>
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

  props: {
    character: {
      type: String,
      default: "chisato",
    },
  },

  computed: {
    initSakanaWidget() {
      return (
        "function initSakanaWidget() {Sakana.init({el: '.sakana-box', scale: 0.5, character: '" +
        this.character +
        "', canSwitchCharacter: true});}"
      );
    },
  },
};
</script>

 <style>
#sakana-box {
  position: fixed;
  left: 0;
  bottom: 24px;
  transform-origin: 0% 100%;
}
</style>
