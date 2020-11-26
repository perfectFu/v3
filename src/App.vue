<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- 数组ref -->
  <!-- <array-ref/> -->
  <!-- 异步组件 -->
  <!-- <button @click="toggle">toggle-{{show}}</button>
  <div v-if="show">
    <async-page></async-page>
  </div> -->
  <user-repositories :user="'fuaoqi'"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ArrayRef from './components/ArrayRef.vue'
import { AsyncPage, AsyncPageWithOption } from './utils/async.js'
import UserRepositories from './components/UserRepositories.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    ArrayRef,
    AsyncPage,
    UserRepositories
  },
  setup () {
    let show = false
    const toggle = () => {
      console.log(show);
      show = !show
    }
    return {
      toggle,
      show
    }
  }
}
</script>
