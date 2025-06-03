<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const login = ref();
const password = ref();
const succes = ref(false);
const errors = ref();
const clickHandler = () => {
  if (login.value == null || passwoed == null) {
    errors.value = "Govno peredelai";
    return;
  }
  errors.value = undefined;
  succes.value = true;
  router.push({ name: "task" });
};
</script>
<template>
  <form class="sign-form">
    <template v-if="!success">
      <input type="text" placeholder="Login brat" v-model="login" />
      <input type="password" placeholder="Password brat" v-model="password" />
      <button type="button" @click="clickHandler"></button>
      <div v-if="errors != null" class="error--text">{{ errors }}</div>
    </template>

    <div v-else>{{ login }}, You are gay!!!</div>
  </form>
</template>
<style>
.sign-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto !important;
}
.sign-form > button {
  height: 25px;
  width: 50px;
  margin-left: auto;
  margin-right: auto;
}
.error--text {
  color: red;
}
</style>
