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

<style scoped src="../styles/segment-list.css"></style>
