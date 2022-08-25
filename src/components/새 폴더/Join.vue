<template>
  <div>
    <h1>{{ message }}</h1>
    <form>
      <label for="">Email
        <input type="text" ref="email" v-model="state.email" placeholder="Email"
          required autofocus class="form-control" @keyup="emailCheckHandler" />
      </label><br>
      <label> {{ state.emailCheck }}</label><br>
      <label for="">Password
        <input type="password" ref="password" v-model="state.password" />
      </label><br>
      <label for="">RePassword
        <input type="password" ref="repassword" v-model="state.repassword" />
      </label><br />
      <label for="">Name
        <input type="text" ref="name" v-model="state.name" />
      </label><br />
      <label for="">
        <input type="button" @click="joinHandler" value="Join" />
      </label>
    </form>
  </div>
</template>

<script>
import {reactive, ref} from '@vue/reactivity'
import axios from 'axios'
import {useRouter} from 'vue-router';

export default {
  name: 'TheJoin',
  setup() {
    const router = useRouter();
    const state = reactive({
      email       : '',
      password    : '',
      repassword  : '',
      name        : '',
      emailCheck  : '',
      token       : sessionStorage.getItem("TOKEN"),
    })
    const email = ref('')
    const password = ref('')
    const repassword = ref('')
    const name = ref('')
    const emailCheckHandler = async() => {
      const url ='/apiserverex/api/emailCheck'
      const headers = {
        "Content-Type" : "application/json",
        Authorization: state.token, 
        "token": state.token }
      const body ={email : state.email}
      const response = await axios.post(url, body, {headers})
      if(response.status === 200){
        state.emailCheck=(response.data.result === 1)?"사용불가":"사용가능"
      } else {
        state.emailCheck="중복 확인"
      }
    }
    const joinHandler = async() => {
      if(state.email === ''){
        alert('Check Email');email.value.focus(); return false;
      } else if(state.password === ''){
        alert('Check Password');password.value.focus(); return false;
      } else if(state.repassword === ''){
        alert('Check RePassword');repassword.value.focus(); return false;
      } else if(state.name === ''){
        alert('Check Name');name.value.focus(); return false;
      } else if(state.password != state.repassword){
        alert('Check Password and RePassword');
        password.value.value='';repassword.value.value='';
        password.value.focus(); return false;
      }
      const url = '/apiserverex/api/memberRegister'
      const headers = {
        "Content-Type" : "application/json",
        Authorization: state.token, 
        "token": state.token }
      const body = {
        email : state.email, password : state.password, name : state.name
      }
      const response = await axios.post(url, body, {headers})
      console.log(response.data)
      if(response.status === 200){
        alert('회원가입이 되었습니다.'); router.push({name: "Home"});
      } else {
        alert('회원가입에 실패하였습니다.')
      }
    }
    
    return {state,email,name,password,repassword,emailCheckHandler,joinHandler}
  },
  data() {
    return {message: 'Welcome Join'}
  }
};
</script>

<style>
  label {
    display: inline-block;width:500px;text-align: right;color: red;
  }
  /* @import url(../assets/commonstyle.css); */
</style>