<template>
  <div id="app">
    <TodoFooter />
    <TodoHeader />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  },
};
</script>

<style></style>
