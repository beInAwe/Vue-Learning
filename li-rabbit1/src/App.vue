<template>
  <div>
    App
    <p>{{ $store.state.username }}</p>
    <p>{{ $store.getters.newName }}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup() {
    // 根模块state的数据
    const store =useStore()
    console.log(store.state.username);
  }
}
</script>
