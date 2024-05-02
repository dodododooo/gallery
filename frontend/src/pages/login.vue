<route lang="yaml">
meta:
  static: true
</route>
<script setup>
const user = ref("");
const pwd = ref("");
</script>

<template>
  <div class="h-100 w-100 d-flex justify-center align-center">
    <v-card elevation="16" width="400" max-width="90vw">
      <v-card-title class="py-5 font-weight-black">欢迎登录</v-card-title>
      <v-card-item>
        <v-form>
          <v-text-field v-model="user" label="用户名"></v-text-field>
          <v-text-field v-model="pwd" label="密码"></v-text-field>
          <v-btn class="mt-2" size="x-large" block>登录</v-btn>
        </v-form>
      </v-card-item>
    </v-card>
  </div>
</template>

<style scoped></style>
