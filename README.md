### limit-input-number

[![npm](https://img.shields.io/npm/v/vue3-limit-input.svg)](https://www.npmjs.com/package/vue3-limit-input)
[![npm](https://img.shields.io/npm/dw/vue3-limit-input.svg)](https://npmtrends.com/vue3-limit-input)
[![vue2](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)

#### 一款基于 vue3 带防抖的无限滚动加载数据的指令

```npm
npm i vue3-limit-input
```

### 使用方法 一

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import limitInputNumber from 'limit-input-number'
const app = createApp(App);
app.use(limitInputNumber);
app.mount("#app");
```

#### 基础用法(默认只能输入2位小数)
```html
<template>
  <input v-limit-input-number placeholder="" />
</template>
```

#### 带参数用法
```html
<template>
  <input v-limit-input-number={limitNumber:3} placeholder="" />
</template>
```
