<template>
  <div>
    <p>关注明显</p>
    <p>发现精彩</p>
    <p>寻找伙伴</p>
    <p>加入我们</p>
    <p>人名:{{ $route.query.name }}
      --
      {{ $router.params.username }}
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>