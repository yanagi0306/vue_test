<template>
  <div>
    <table v-if="value === 'All'" id="All">
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

    <table v-else-if="value === 'Working'" id="Working">
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td v-if="task.status % 2 != 0">{{ index }}</td>
        <td v-if="task.status % 2 != 0">{{ task.name }}</td>
        <button
          v-if="task.status % 2 != 0"
          @click="statusChange(index)"
          class="button-status"
        >
          作業中
        </button>
        <button
          v-if="task.status % 2 != 0"
          @click="del(index)"
          class="button-del"
        >
          削除
        </button>
      </tr>
    </table>

    <table v-else-if="value === 'Done'" id="Done">
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td v-if="task.status % 2 == 0">{{ index }}</td>
        <td v-if="task.status % 2 == 0">{{ task.name }}</td>
        <button
          v-if="task.status % 2 == 0"
          @click="statusChange(index)"
          class="button-status"
        >
          完了
        </button>
        <button
          v-if="task.status % 2 == 0"
          @click="del(index)"
          class="button-del"
        >
          削除
        </button>
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
    value: {
      type: String,
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
