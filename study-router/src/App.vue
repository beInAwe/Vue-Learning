<template>
    <div>
        <div class="footer_wrap">
            <span @click="btn('./find','Find')">发现音乐</span>
            <span @click="btn('./my','My')">我的音乐</span>
            <span  @click="oneBtn">朋友-小传</span>
            <span  @click="twoBtn">朋友-小智</span>
        </div>
        <div class="top">
            <router-view></router-view>
        </div>
    </div>
</template>
    
<script>

//目标:编程式导航- js方式跳转路由
//语法:
// this. $router.push({path: ”路由路径"})
// this. $router.push( {name: "路由名"})
//注意：虽然用name跳转,但是url的hash值还是切换path路径值
export default {
    methods:{
        btn(targetPath,targetName){
            //方式1:path的方式跳转
            this.$router.push({
                // path:targetPath
                name:targetName
            })
        },
        oneBtn(){
            this.$router.push({
                name:'Part',
                params:{
                    username:'小传'
                }
            })
        },
        twoBtn(){
            this.$router.push({
                name:'Part',
                query:{
                    username:'小智'
                }
            })
        }
    }
};
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

.footer_wrap span{
    flex: 1;
    text-decoration: none;
    padding: 20px 0;
    line-height: 20px;
    background-color: #333;
    color: #ccc;
    border: 1px solid black;
}

.footer_wrap span:hover {
    background-color: #555;
}

.top {
    padding-top: 62px;
}

/* 省略了 其他样式 */
.footer_wrap .router-link-active {
    color: white;
    background: black;
}
</style>
  