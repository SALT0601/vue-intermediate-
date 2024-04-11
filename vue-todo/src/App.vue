<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addTodoItem="addOneItem" />
    <!-- addTodoItem 이벤트 받아  addOneItem 실행 -->
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    />
    <TodoFooter v-on:clearItems="clearAllItems" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  //모든 컴포넌트에서 공통 사용하는 데이터
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    //addTodoItem에서 인자도 넘어왔기 때문에 인자 받음
    addOneItem: function (todoItem) {
      var obj = { completed: false, item: todoItem };
      //저장로직
      localStorage.setItem(todoItem, JSON.stringify(obj)); //자바스크립트 객체를 스트링으로 변환
      this.todoItems.push(obj);
    },
    removeOneItem: function (todoItem, idx) {
      localStorage.removeItem(todoItem.item);
      // 특정 인덱스에서 시작해서 지울 수 있음
      this.todoItems.splice(idx, 1);
    },
    toggleOneItem: function (todoItem, idx) {
      //todoItem.completed = !todoItem.completed;
      this.todoItems[idx].completed = !this.todoItems[idx].completed;
      //로컬 스토리지에 데이터 갱신 - 업데이트가 없기떄문에 지웠다가 변한거 셋 해줌
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function () {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  // 인스턴트가 생성되자 마자 실행되는 훅
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          //JSON 형태로 변환
          var jsonItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(jsonItem);
          //this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
  margin: 10px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.03);
}
</style>
