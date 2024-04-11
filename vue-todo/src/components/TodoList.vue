<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, idx) in propsdata"
        v-bind:key="todoItem"
        class="shadow"
      >
        <span
          class="checkBtn"
          v-bind:class="{ checkBtnCompeted: todoItem.completed }"
          v-on:click="toggleComplete(todoItem, idx)"
        >
          <i class="fa-solid fa-check"></i>
        </span>
        <!-- 클래스를 동적 이용 -->
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, idx)">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //app.vue에서 내려 받음
  props: ["propsdata"],
  methods: {
    removeTodo: function (todoItem, idx) {
      this.$emit("removeItem", todoItem, idx);
    },
    toggleComplete: function (todoItem, idx) {
      this.$emit("toggleItem", todoItem, idx);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: 5px;
  background-color: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  display: flex;
  line-height: 50px;
  align-items: center;
}

.checkBtnCompeted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>
