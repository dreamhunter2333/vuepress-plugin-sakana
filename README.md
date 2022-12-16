# vuepress-plugin-sakana

For vuepreess2.x

```bash
yarn add @dreamhunter2333/vuepress-plugin-sakana --registry=https://npm.pkg.github.com
```

```js
plugins: [
    ['@dreamhunter2333/vuepress-plugin-sakana', {}]
]
```

```js
plugins: [
    ['@dreamhunter2333/vuepress-plugin-sakana', {
        config: {
            scale: 0.5,
            canSwitchCharacter: true,
        },
        styleObject: {
            position: "fixed",
            right: 0,
            bottom: "24px",
            "transform-origin": "100% 100%",
        }
    }]
]
```
