<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header></Header>
    <div>
      <Menu></Menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

@Component({
  components: {
    Header,
    Menu,
  }
})

export default class Home extends Vue {

}
</script>
