<template>
  <div id="app">
    <PieChart :data="chartData" />
  </div>
</template>


<script>
import PieChart from 'customizable-vue-svg-pie-chart';

export default {
  components: {
    PieChart,
  },
  data() {
    return {
      chartData: [
        { label: "Segment 1", percentage: 40, color: "#ff6384" },
        { label: "Segment 2", percentage: 30, color: "#36a2eb" },
        { label: "Segment 3", percentage: 20, color: "#cc65fe" },
        { label: "Segment 4", percentage: 10, color: "#ffce56" },
      ]
    };
  }
};

</script>

