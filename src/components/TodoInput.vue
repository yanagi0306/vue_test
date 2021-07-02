<template>
  <div>
    <h2>タスクの追加</h2>
    <form>
      <input type="text" class="textbox" v-model="task" />
      <input type="button" class="button-add" value="追加" @click="addTask" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      task: '',
    };
  },
  methods: {
    addTask() {
      if (this.task != '') {
        this.$emit('add', this.task);
        this.task = '';
      }
    },
  },
};
</script>
