<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <slot name="header">
          <!-- <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th> -->
        </slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="obj in arr" :key='obj.id'>
        <slot name="body" :row="obj">
          <!-- <td>{{ obj.id }}</td>
          <td>{{ obj.goods_name }}</td>
          <td>{{ obj.goods_price }}</td>
          <td>{{ obj.tags }}</td>
          <td>
            <button class="btn btn-danger btn-sm">
              删除
            </button>
          </td> -->
        </slot>
      </tr>
    </tbody>
  </table>
</template>
  
<script>
export default {
  name: 'MyTable',
  props: {
    arr: {
      type: Array,
      default: []
    }
  }
}
</script>
  
  
<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>