<template>
  <ul class="segment-list">
    <li v-for="(segment, index) in segments" :key="index" class="segment-item">
      <div :style="{ backgroundColor: segment.color }" class="color-box"></div>
      <span>{{ segment.label }} - {{ segment.percentage }}%</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SegmentList',
  props: {
    segments: {
      type: Array,
      required: true,
    },
  },
};
</script>
  
<style scoped>
.segment-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.segment-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.color-box {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 3px;
}
</style>
  