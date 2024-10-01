<template>
  <div id="app">
    <h1>Customizable Vue.js Pie Chart</h1>
    
    <pie-chart 
      :data="pieChartData" 
      :segmentColors="segmentColors" 
      :textSize="textSize"
      :textColor="textColor"
      :onSegmentClick="onSegmentClick"
      :large="isLarge"
      :showLegendText="true"
      legendText="Sales Distribution"
      legendPosition="top"
      :showSegmentList="showSegmentList"
    ></pie-chart>

    <!-- Controls for adjusting chart -->
    <div class="controls">
      <label>
        Text Size: 
        <input type="range" v-model="textSize" min="1" max="10">
      </label>
      <label>
        Text Color: 
        <input type="color" v-model="textColor">
      </label>
      <label>
        Large Size: 
        <input type="checkbox" v-model="isLarge">
      </label>
      <label>
        Show Segment List:
        <input type="checkbox" v-model="showSegmentList">
      </label>
    </div>
  </div>
</template>

<script>
import PieChart from './components/PieChart.vue';

export default {
  name: 'App',
  components: {
    PieChart,
  },
  data() {
    return {
      pieChartData: [
        { label: "Segment 1", percentage: 40, link: "#" },
        { label: "Segment 2", percentage: 30, link: "#" },
        { label: "Segment 3", percentage: 20, link: "#" },
        { label: "Segment 4", percentage: 10, link: "#" },
      ],
      segmentColors: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      textSize: 4,
      textColor: "#1F1D1D",
      isLarge: false,
      showSegmentList: true, // Optional segment list display
    };
  },
  methods: {
    onSegmentClick(segment) {
      alert(`Clicked on segment: ${segment.label}`);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.controls {
  margin-top: 20px;
}
</style>
