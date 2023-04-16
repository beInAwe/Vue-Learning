<template>
    <div class="my-tab-bar">
        <div class="tab-item" 
        v-for="(obj, index) in arr" 
        :key="index" 
        @click="btn(index,obj)"
        :class="{ current: selIndex === index }"
        >
            <!-- 图标 -->
            <span class="iconfont" :class="obj.iconText"></span>
            <!-- 文字 -->
            <span>{{ obj.text }}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        arr: {
            type: Array,
            required: true,
            //自定义校验规则
            validator(value) {
                //value接到的数组
                if (value.length >= 2 && value.length <= 5) {
                    return true;
                } else {
                    console.error("数据项在2-5项");
                    return false
                }
            }
        }
    },
    data() {
        return {
            selIndex: 0//高亮元素下标
        }
    },
    methods: {
        btn(index,theObj) {
            this.selIndex = index; // 点谁, 就把谁的索引值保存起来
            this.$emit("changeCom", theObj.componentName); // 要切换的组件名传App.vue
        },
    },
}
</script>
  
<style lang="less" scoped>
.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.current {
    color: #1d7bff;
}
</style>