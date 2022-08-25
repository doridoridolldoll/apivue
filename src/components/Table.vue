<template>
  <div>
    <h2> {{ counter }}</h2>
    <button @click="inc">Increment</button>

    <table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>Social</th>
        <th>전화번호</th>
        <th>등록 일자</th>
        <th>수정 일자</th>
      </tr>
      <tr v-for="(list, i) in dtoList" :key="(list, i)">
        <td>{{ list.username }}</td>
        <td>{{ list.name }}</td>
        <td>{{ list.email }}</td>
        <td>{{ list.fromSocial }}</td>
        <td>{{ list.regDate }}</td>
        <td>{{ list.modDate }}</td>
      </tr>
    </table>
    <Pagination 
      :dtoList="dtoList"
      :page="page"
      :prev="prev"
      :next="next"
      :start="start"
      :end="end"
      :pageList="pageList"
      :totalPage="totalPage"
    />
  </div>
</template>

<script>
import Pagination from './Pagination.vue';
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TheTable',
  components: { Pagination },
  props: ['dtoList','page','prev','next','start','end'
        ,'pageList','totalPage','pageChange'],
  data(){
    return { }
  },
  setup(){
    const store = useStore()
    const counter = computed(function() {
      return store.state.counter
    })
    const inc = function(){
      store.commit("setCounter", counter.value + 1)
    }
    
    return { counter, inc }
  }
}
</script>

<style>
table {
  width: 1000px;
  border-top: 1px solid #444444;
  border-collapse: collapse;
  margin: 0 auto;
}
th {
  border-bottom: 1px solid #444444;
  padding: 10px;
  text-align: center;
  background: blue;
  color: white;
}
td {
  border-bottom: 1px solid #aaa;
  padding: 8px;
  text-align: center;
}
</style>