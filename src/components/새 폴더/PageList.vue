<template>
  <div>
    <h1>{{ message }} {{ counter }}</h1>
    <button @click="inc">Increment</button>
    <Table
      :dtoList="state.dtoList"
      :page="state.page"
      :prev="state.prev"
      :next="state.next"
      :start="state.start"
      :end="state.end"
      :pageList="state.pageList"
      :totalPage="state.totalPage"
    />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { computed } from 'vue'
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import Table from './Table.vue'

export default {
  name: 'ThePageList',
  components: { Table },
  setup() {
    const store = useStore()
    const counter = computed(function () {
      return store.state.counter
    })
    const inc = function () {
      store.commit('setCounter', counter.value + 1)
    }
    onMounted(() => { 
      store.commit('handleGetPageList', store.state.page)
    }) 
    const state = reactive({
      dtoList: computed(function(){return store.state.dtoList}),
      page: computed(function(){return store.state.page}),
      prev: computed(function(){return store.state.prev}),
      next: computed(function(){return store.state.next}),
      start: computed(function(){return store.state.start}),
      end: computed(function(){return store.state.end}),
      pageList: computed(function(){return store.state.pageList}),
      totalPage: computed(function(){return store.state.totalPage}),
      email: sessionStorage.getItem('email'),
      token: sessionStorage.getItem('TOKEN'),
    })

    return {
      message: 'Page List',state,counter,inc,
    }
  },
}
</script>

<style></style>
