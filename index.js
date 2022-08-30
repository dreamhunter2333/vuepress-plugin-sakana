const path = require('path')

module.exports = (options = {}, context) => ({
  name: 'vuepress-plugin-sakana',

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],

  globalUIComponents: 'SakanaWidgetPlugin',

  async ready() {
    options.config = options.config || {
      scale: 0.5,
      character: "chisato",
      canSwitchCharacter: true,
    };
    options.styleObject = options.styleObject || {
      position: "fixed",
      left: 0,
      bottom: "24px",
      "transform-origin": "0% 100%",
    };
    options.config.el = ".sakana-box";
  },

  define() {
    return {
      OPTIONS: JSON.stringify(options)
    };
  },
})
