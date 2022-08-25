<template>
  <div>
    <h1>{{ message }} {{ counter }} <button @click="inc">Plus</button> </h1>
    <button @click="showModal=true">Show Modal</button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </modal>
    </Teleport>
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
import Modal from './teleport/Modal.vue'

export default {
  name: 'ThePageList',
  components: { Table, Modal },
  setup() {
    const store = useStore()
    const counter = computed(function () {
      return store.state.counter
    })
    const inc = function () {
      store.commit('setCounter', counter.value + 1)
    }
    onMounted(() => { 
      store.dispatch('handleGetPageList')
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
  data() {
    return {showModal: false}
  }
}
</script>

<style></style>
