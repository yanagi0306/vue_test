<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>{{ index }}</td>
        <td>{{ task.name }}</td>
        <button
          v-if="task.status % 2 != 0"
          @click="statusChange(index)"
          class="button-status"
        >
          作業中
        </button>
        <button v-else @click="statusChange(index)" class="button-status">
          完了
        </button>
        <button @click="del(index)" class="button-del">削除</button>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    statusChange(index) {
      this.$emit('statusChange', index);
    },
    del(index) {
      this.$emit('del', index);
    },
  },
};
</script>
