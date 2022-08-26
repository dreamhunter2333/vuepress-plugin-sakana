<template></template>

<script>
import SakanaWidget from "sakana-wdiget";
export default {
  name: "SakanaWidget",

  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      SakanaWidget({ defaultCharacter: "chisato" });
    });
  },
};
</script>
