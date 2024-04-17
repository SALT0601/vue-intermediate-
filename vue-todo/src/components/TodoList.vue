<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, idx) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <!-- propsdata 로 안하고 store 사용해서 가져올 수도 있음 -->
        <span
          class="checkBtn"
          v-bind:class="{ checkBtnCompeted: todoItem.completed }"
          v-on:click="toggleComplete({ todoItem, idx })"
        >
          <i class="fa-solid fa-check"></i>
        </span>
        <!-- 클래스를 동적 이용 -->
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, idx })">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  //app.vue에서 내려 받음
  // props: ["propsdata"], - store씀
  methods: {
    ...mapMutations({
      // 인자 선언 안해도 호출 단에 인자 넣으면 그대로 들고 넘겨줌
      //  this.$store.commit("removeOneItem", { todoItem, idx }); 처럼 인자 선언 안해도 됨
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),
    // removeTodo(todoItem, idx) {
    //   // this.$emit("removeItem", todoItem, idx);
    //   //App갈 필요 없이 바로 store 호출하면됨
    //   this.$store.commit("removeOneItem", { todoItem, idx });
    // },
    // toggleComplete(todoItem, idx) {
    //   // this.$emit("toggleItem", todoItem, idx);
    //   //App갈 필요 없이 바로 store 호출하면됨
    //   this.$store.commit("toggleOneItem", { todoItem, idx });
    // },
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.sotredTodoItems;
    // },
    ...mapGetters(["storedTodoItems"]),
    //객체 형태도 있는데 이 경우 store의 getters 이름과 컴포넌트에서 사용하는 위 이름이 다를때 씀
    // ...mapGetters({
    //   todoItems: "storedTodoItems"
    //   }),
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
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
