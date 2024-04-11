<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, idx) in todoItems"
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
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo: function (todoItem, idx) {
      localStorage.removeItem(todoItem);
      // 특정 인덱스에서 시작해서 지울 수 있음
      this.todoItems.splice(idx, 1);
    },
    toggleComplete: function (todoItem, idx) {
      todoItem.completed = !todoItem.completed;
      //로컬 스토리지에 데이터 갱신 - 업데이트가 없기떄문에 지웠다가 변한거 셋 해줌
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      console.log(idx);
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
