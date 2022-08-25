<template>
  <div>
    <h1>{{message}}</h1>
    <div v-if="state.email">
      <span class="title">이름</span> : {{state.name}}<br>
      <span class="title">Email</span> : {{state.email}}<br>
      <span class="title">Social</span> : {{state.fromSocial?true:false}}<br>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated } from 'vue'
import { reactive } from '@vue/reactivity'
import axios from 'axios'

export default {
  name: 'AuthView',
  setup(){
    onMounted(() => { handleGetAuth(); })
    onUpdated(() => { handleGetAuth(); })
    const state = reactive({
      name: '',
      fromSocial: '',
      email: sessionStorage.getItem("email"),
      token : sessionStorage.getItem("TOKEN"),
    })
    const handleGetAuth = async() => {
      const url ='/apiserverex/api/getAuth'
      const headers = {
        "Content-Type" : "application/json",
        Authorization: state.token, 
        "token": state.token }
      const body ={email : state.email,}
      await axios.post(url, body, {headers}).then(function(res){
        if(res.status === 200){
          state.name = res.data.dto.name;
          state.email = res.data.dto.email;
          state.fromSocial = res.data.dto.fromSocial;
        }
      })
    }
    return {message: 'View Authenticaton', state, handleGetAuth}
  }
}
</script>

<style>

</style>