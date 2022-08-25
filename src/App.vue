<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/join">Join Member</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/list">Member List</router-link>
      </li>
      <li>
        <router-link to="/pagelist">Page List</router-link>
      </li>
      <li>
        <router-link to="/authView">Auth Detail</router-link>
      </li>
    </ul> 
  </nav>
  <router-view />
  <!-- <TeleportExample /> -->
</template>
<script>
// import TeleportExample from './components/teleport/TeleportExample'

export default ({
  // components: { TeleportExample },
  setup() {},
})
</script>

<style>
ul{list-style: none;}
li{display: inline-block;width: 150px;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
