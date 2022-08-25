<template>
  <div>
    <h1>{{message}}</h1>
    <form>
      <input type="text" ref="email" v-model="state.email" placeholder="Email"><br>
      <input type="password" ref="pw" v-model="state.pw" placeholder="Password"><br>
      <input type="button" value="Login-in" @click="loginHandler"><br>
    </form>
  </div>
</template>

<script charset='utf-8'>
import {reactive, ref} from '@vue/reactivity';
import axios from 'axios';
import { useRouter } from 'vue-router'

export default {
  name: 'TheLogin',
  setup() {
    const router  = useRouter();
    const state = reactive({email: 'user95@zerock.org', pw: '1'})
    const email = ref(''); const pw = ref('')
    const loginHandler = async() => {
      if(state.email === ''){
        alert('Check Email');email.value.focus(); return false;
      } else if(state.pw === ''){
        alert('Check Password');pw.value.focus(); return false;
      }
      const url     = "http://localhost:9090/apiserverex/members/login"
      const headers = { "Content-Type": "application/json; charset=utf-8"}
      const body    = { email: state.email, pw: state.pw }
      await axios.post(url, body, {headers}).then(function(res){
        if(res.data != null){
          sessionStorage.setItem("TOKEN", res.data.token)
          sessionStorage.setItem("email", res.data.email)
          alert('로그인되었습니다.')
          router.push({name: "Login"})
        } else {
          alert('로그인 실패하였습니다.')
        }
      })
    }
    return { state, email, pw, loginHandler,}
  },
  data() {
    return {message: "Welcome Login"}
  }

}
</script>

<style>

</style>