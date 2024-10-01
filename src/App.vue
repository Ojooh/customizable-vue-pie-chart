<template>
  <div id="PieChart">
    <h1>Customizable Vue.js Pie Chart</h1>

    <pie-chart 
        :data="pieChartData" 
        :segmentColors="segmentColors" 
        :textSize="textSize"
        :textColor="textColor"
        :onSegmentClick="onSegmentClick"
        :showSegmentList="showSegmentList"
        :showLegendText="showLegendText"
        :legendPosition="legendPosition"
        :containerClass="'w-300'"
        :size="size"
        :legendText="legendText"
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
            Show Segment List:
            <input type="checkbox" v-model="showSegmentList">
        </label>
        <label>
            Show Legend:
            <input type="checkbox" v-model="showLegendText">
        </label>
        <label>
            Legend Text:
            <input type="text" v-model="legendText">
        </label>
        <label>
            Legend Position:
            <select v-model="legendPosition">
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
            </select>
        </label>
        <label>
            Pie Chart Size:
            <input type="number" v-model="size" min="100" max="800">
        </label>
    </div>

    <!-- Controls for editing pie chart data -->
    <div class="data-controls">
      <h3>Edit Pie Chart Data</h3>
      <div v-for="(segment, index) in pieChartData" :key="index" class="segment-control">
        <input type="text" v-model="segment.label" placeholder="Segment Label">
        <input type="number" v-model="segment.percentage" min="0" max="100" @input="validateTotalPercentage">
        <input type="color" v-model="segment.color" />
        <button @click="deleteSegment(index)">Delete</button>
      </div>
      <button @click="addSegment">Add Segment</button>
      <p v-if="totalPercentageError" class="error">{{ totalPercentageError }}</p>
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
              { label: "Segment 1", percentage: 40, link: "#", color: "#ff6384" },
              { label: "Segment 2", percentage: 30, link: "#", color: "#36a2eb" },
              { label: "Segment 3", percentage: 20, link: "#", color: "#cc65fe" },
              { label: "Segment 4", percentage: 10, link: "#", color: "#ffce56" },
          ],
          textSize: 2,
          textColor: "#1F1D1D",
          showSegmentList: true,
          showLegendText: true,
          legendText: "Figure 1",
          legendPosition: "top",
          size: 300,
          totalPercentageError: "", // Track percentage validation error
      };
  },
  methods: {
      onSegmentClick(segment) {
          alert(`Clicked on segment: ${segment.label}`);
      },
      validateTotalPercentage() {
          const totalPercentage = this.pieChartData.reduce((sum, segment) => sum + segment.percentage, 0);
          if (totalPercentage > 100) {
              this.totalPercentageError = "Total percentage cannot exceed 100%!";
          } else if (totalPercentage < 100) {
              this.totalPercentageError = "Total percentage must equal 100%!";
          } else {
              this.totalPercentageError = "";
          }
      },
      addSegment() {
          this.pieChartData.push({ label: "New Segment", percentage: 0, link: "#", color: "#000000" });
      },
      deleteSegment(index) {
          this.pieChartData.splice(index, 1);
          this.validateTotalPercentage(); // Re-validate after deletion
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.data-controls {
  margin-top: 30px;
  margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.segment-control {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.segment-control input[type="text"],
.segment-control input[type="number"],
.segment-control input[type="color"] {
  margin-right: 10px;
}
.error {
  color: red;
}
.w-300 { width: 500px; }
</style>
