const storage = {
  fetch() {
    const arr = [];
    // 인스턴트가 생성되자 마자 실행되는 훅
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          //JSON 형태로 변환
          var jsonItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(jsonItem);
          //this.todoItems.push(localStorage.key(i));
        }
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);

    state.todoItems.splice(payload.idx, 1);
  },
  toggleOneItem(state, payload) {
    state.todoItems[payload.idx].completed =
      !state.todoItems[payload.idx].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(
      payload.todoItem.item,
      JSON.stringify(payload.todoItem)
    );
  },

  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
