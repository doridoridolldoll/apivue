<template>
  <div>
    <h1>{{ message }}</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>Social</th>
        <th>전화번호</th>
        <th>등록 일자</th>
        <th>수정 일자</th>
      </tr>
      <tr v-for="(list, i) in state.lists" :key="(list, i)">
        <td>{{ list.username }}</td>
        <td>{{ list.name }}</td>
        <td>{{ list.email }}</td>
        <td>{{ list.fromSocial }}</td>
        <td>{{ list.regDate }}</td>
        <td>{{ list.modDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { reactive } from '@vue/reactivity'
import axios from 'axios'

export default {
  name: 'TheList',
  setup() {
    onMounted(() => {
      handleGetList()
    })
    const state = reactive({
      lists: '',
      email: sessionStorage.getItem('email'),
      token: sessionStorage.getItem('TOKEN'),
    })
    const handleGetList = async () => {
      const url = '/apiserverex/api/getlist'
      const headers = {
        'Content-Type': 'application/json',
        Authorization: state.token,
        token: state.token,
      }
      const body = { email: state.email }
      await axios.post(url, body, { headers }).then(function (res) {
        if (res.status === 200) {
          state.lists = res.data
        }
      })
    }
    return { message: 'Member List', state, handleGetList }
  },
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
