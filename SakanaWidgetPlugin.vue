<template>
  <div></div>
</template>

<script>
import SakanaWidget from "sakana-wdiget";

export default {
  name: "SakanaWidgetPlugin",

  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      SakanaWidget({ defaultCharacter: "chisato" });
    });
  },
};
</script>
