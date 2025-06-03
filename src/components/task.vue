<script setup>
import { ElInput } from "element-plus";
import { ElCheckbox } from "element-plus";
import { ElButton } from "element-plus";
import { reactive } from "vue";
const task = reactive({
  status: false,
  title: false,
});
const clickHandler = () => {
  const url = new URL("task", "https://da11os.pythonanywhere.com");
  fetch(url, {
    method: "POST",
    body: JSON.stringify{task},
    headers: [
        ["Accept", "application/json"]
        ["content-type", "application/json"]
    ]
  });
};
</script>
<template>
  <el-input placeholder="Name" v-model="task.title"></el-input>
  <el-checkbox label="Done" v-model="task.status"></el-checkbox>
  <el-button type="succes" @click="">Success</el-button>
</template>
