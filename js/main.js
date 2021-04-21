new Vue({
  el:"#app",
  data: {
    newItem:"",
    todos: [],
  },
  methods: {
    addItem: function(e) {
      if(this.newItem == "") return;
      let todo= {
        item: this.newItem,
        isDone: false,
      }
      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem: function(i){
      this.todos.splice(i, 1)
      //  i番目のindexを1つ削除する処理
    },
  }
})