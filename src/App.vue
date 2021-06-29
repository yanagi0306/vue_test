<template>
  <div>
    <h2>ToDoリスト</h2>
    <todo-filter @change="changeFilter"></todo-filter>
    <todo-display
      :tasks="tasks"
      :value="value"
      @statusChange="statusChange"
      @del="del"
    ></todo-display>
    <todo-input @add="addTask"></todo-input>
  </div>
</template>

<script>
import todoInput from './components/TodoInput.vue';
import todoFilter from './components/TodoFilter.vue';
import TodoDisplay from './components/TodoDisplay.vue';

export default {
  components: {
    todoInput,
    todoFilter,
    TodoDisplay,
  },
  data() {
    return {
      tasks: [],
      value: 'All',
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push({
        name: task,
        status: 1,
      });
    },
    changeFilter(value) {
      this.value = value;
    },
    statusChange(index) {
      this.tasks[index].status++;
    },
    del(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
