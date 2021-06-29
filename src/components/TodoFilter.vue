<template>
  <div>
    <form>
      <input type="radio" name="status" @click="statusChange('All')" checked />
      <label>すべて</label>
      <input type="radio" name="status" @click="statusChange('Working')" />
      <label>作業中</label>
      <input type="radio" name="status" @click="statusChange('Done')" />
      <label>完了</label>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    statusChange(value) {
      this.$emit('change', value);
    },
  },
};
</script>
