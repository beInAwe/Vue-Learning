<template>
    <div>
        <MyTable :arr="list">
            <template #header>
                <th>#</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <template #body="scope">
                <td>{{ scope.row.id }}</td>
                <td>{{ scope.row.goods_name }}</td>
                <td>{{ scope.row.goods_price }}</td>
                <td>
                    <input class="tag-input form-control" style="width: 100px;" type="text" v-if="scope.row.inputVisible"
                        v-focus @blur="scope.row.inputVisible = false" @keydown.enter="enterFn(scope.row)"
                        v-model="scope.row.inputValue" />

                    <button v-else style="display: block;" class="btn btn-primary btn-sm add-tag"
                        @click="scope.row.inputVisible = true">+Tag</button>

                    <span v-for="(str, index) in scope.row.tags" :key="index">
                        {{ str }}
                    </span>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="removeBtn(scope.row.id)">
                        删除
                    </button>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from '@/components/MyTable.vue';
import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn'
export default {
    components: {
        MyTable
    },
    data() {
        return {
            list: [],
            isShow: false
        }
    }
    ,
    created() {
        axios({
            url: './api/goods'
        }).then(res => {
            console.log(res);
            this.list = res.data.data
        })
    },
    methods: {
        removeBtn(id) {
            let index = this.list.findIndex(obj => obj.id === id)
            this.list.splice(index, 1)
        },
        enterFn(obj) {
            console.log(obj.inputValue);
            if (obj.inputValue.trim().length === 0) {
                alert('请输入数据')
                return
            }
            obj.tags.push(obj.inputValue)//字符串状态tags数组
        }
    }
}
</script>

<style></style>