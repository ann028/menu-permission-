<template>
  <div class="main">
    <div>
      <span>姓名：</span>
      <input type="text" v-model="name">
    </div>
    <button style="margin-top: 20px;" @click="doLogin">提交</button>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import * as userApi from '@/api/user.ts'
@Component
export default class Login extends Vue{
  private name: string = ''
  private doLogin() {
    userApi.logIn().then((res: any) => {
      console.log(res)
    })
  }
}
</script>