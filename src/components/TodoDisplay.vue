<template>
  <div>
    <All
      v-if="value === 'All'"
      :tasks="tasks"
      @statusChange="statusChange"
      @del="del"
      id="All"
    ></All>
    <Working
      v-else-if="value === 'Working'"
      :tasks="tasks"
      @statusChange="statusChange"
      @del="del"
      id="Working"
    ></Working>
    <Done
      v-else-if="value === 'Done'"
      :tasks="tasks"
      @statusChange="statusChange"
      @del="del"
      id="Done"
    ></Done>
  </div>
</template>

<script>
import All from './All.vue';
import Working from './Working.vue';
import Done from './Done.vue';

export default {
  components: {
    All,
    Working,
    Done,
  },
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
