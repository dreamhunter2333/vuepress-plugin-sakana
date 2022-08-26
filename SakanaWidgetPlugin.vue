<template>
  <div>
    <div id="sakana-widget"></div>
    <script>
      function initSakanaWidget() {
        SakanaWidget({ defaultCharacter: "takina" });
      }
    </script>
    <script
      async
      onload="initSakanaWidget()"
      src="https://cdn.jsdelivr.net/npm/sakana-widget@1.0.0/lib/sakana.min.js"
    ></script>
  </div>
</template>

// <script>
// import SakanaWidget from "sakana-widget";

// export default {
//   name: "SakanaWidgetPlugin",

//   mounted() {
//     window.addEventListener("DOMContentLoaded", () => {
//       SakanaWidget({ defaultCharacter: "chisato" });
//     });
//   },
// };
//
</script>

 <style>
#sakana-widget {
  position: fixed;
  right: 24px;
  bottom: 24px;
}
</style>
