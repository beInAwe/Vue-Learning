<template>
    <div>
      <div class="footer_wrap">
        <router-link to="/find">发现音乐</router-link>
        <router-link to="/my">我的音乐</router-link>
        <router-link to="/part">朋友</router-link>
      </div>
      <div class="top">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>

  //目标声明式导航
  export default {};
  </script>
  
  <style scoped>
  .footer_wrap {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    text-align: center;
    background-color: #333;
    color: #ccc;
  }
  .footer_wrap a {
    flex: 1;
    text-decoration: none;
    padding: 20px 0;
    line-height: 20px;
    background-color: #333;
    color: #ccc;
    border: 1px solid black;
  }
  .footer_wrap a:hover {
    background-color: #555;
  }
  .top {
    padding-top: 62px;
  }

  /* 省略了 其他样式 */
.footer_wrap .router-link-active{
  color: white;
  background: black;
}
  </style>