<template>
    <div :class="['pie-chart-container', containerClass]">
    <!-- Legend Text -->
    <div v-if="showLegendText" :class="['legend', legendPosition]">
      <p>{{ legendText }}</p>
    </div>
    <div :class="['pie-chart-container']" :style="`width: ${size}px`">
      <svg viewBox="0 0 32 32" class="pie-chart-svg">
        <!-- Full Segment Case -->
        <template v-if="hasFullSegment">
          <circle
            cx="16"
            cy="16"
            r="16"
            :fill="fullSegment.color"
            class="pie-chart-circle cursor-pointer"
            @click="handleSegmentClick($event, fullSegment)"
          />
          <text
            x="16"
            y="16"
            text-anchor="middle"
            alignment-baseline="middle"
            :fill="textColor"
            :font-size="textSize"
            class="pie-chart-text"
            v-if="showText"
          >
            {{ Math.round(fullSegment.percentage) }}%
          </text>
        </template>

        <!-- Regular Pie Chart Case -->
        <template v-else>
          <!-- Pie chart slices -->
          <path
            v-for="(segment, index) in pieData"
            :key="index"
            :d="segment.pathData"
            :fill="segment.color"
            stroke="white"
            :stroke-width="strokeWidth"
            @click="handleSegmentClick($event, segment)"
            stroke-linecap="round"
            :class="segment.link ? 'cursor-pointer' : ''"
          />

          <!-- Text labels for each segment -->
          <text
            v-for="(segment_text, text_index) in pieData"
            :key="'text-' + text_index"
            :x="segment_text.textX"
            :y="segment_text.textY"
            text-anchor="middle"
            alignment-baseline="middle"
            :fill="textColor"
            :font-size="textSize"
            :class="[cursorPointerClass(segment_text), textClass]"
            @click="handleSegmentClick($event, segment_text)"
            v-if="showText"
          >
            {{ Math.round(segment_text.percentage) }}%
          </text>
        </template>
      </svg>
    </div>
    

    <!-- Optional segment list component -->
    <segment-list v-if="showSegmentList" :segments="data"></segment-list>
  </div>
</template>

<script>
import SegmentList from './SegmentList.vue';

export default {
  name: "PieChart",
  props: {
    data: { type: Array, required: true, default: () => [] },

    showText: { type: Boolean, default: true },

    textSize: { type: Number, default: 4 },

    textColor: { type: String, default: "#1F1D1D" },

    textClass: { type: String, default: null },

    onSegmentClick: { type: Function, default: null },

    showLegendText: { type: Boolean, default: false },

    legendText: { type: String, default: 'Pie Chart' },

    legendPosition: { type: String, default: 'bottom' },

    showSegmentList: { type: Boolean, default: false },

    containerClass: { type: String, default: null },

    strokeWidth: { type: Number, default: 0.2 },

    size: { type: Number, default: 300 },

  },
  data() {
    return { fullSegment: null };
  },
  computed: {
    hasFullSegment() {
      const segment = this.data.find((segment) => segment.percentage === 100);
      this.fullSegment = segment;
      return segment;
    },

    pieData() {
      return this.generatePieData(this.data);
    },
  },
  methods: {
    cursorPointerClass (segment) { return segment.link ? 'cursor-pointer': ''},
    
    handleSegmentClick(e, segment) {
      if (this.onSegmentClick) {
        this.onSegmentClick(segment);
      } else if (segment.link) {
        window.location.href = segment.link;
      }
    },

    calculatePathData(startAngle, percentage) {
      const radius = 16;
      const endAngle = startAngle + percentage * 3.6;
      const startRadians = (startAngle * Math.PI) / 180;
      const endRadians = (endAngle * Math.PI) / 180;

      const x1 = 16 + radius * Math.cos(startRadians);
      const y1 = 16 + radius * Math.sin(startRadians);
      const x2 = 16 + radius * Math.cos(endRadians);
      const y2 = 16 + radius * Math.sin(endRadians);

      const largeArcFlag = percentage > 50 ? 1 : 0;

      return `M16,16 L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
    },

    generatePieData(pie_data) {
      const totalPercentage = pie_data.reduce((acc, segment) => acc + segment.percentage, 0);
      if (totalPercentage !== 100) {
        console.error('The total percentage of pie chart segments must equal 100%.');
        return [];
      }

      let cumulativeAngle = -90;

      return pie_data.map((segment) => {
        const segmentData = { ...segment };
        const midAngle = cumulativeAngle + (segment.percentage / 2) * 3.6;
        const radians = (midAngle * Math.PI) / 180;

        segmentData.textX = 16 + 9 * Math.cos(radians);
        segmentData.textY = 16 + 9 * Math.sin(radians);

        if (segment.percentage > 0) {
          segmentData.pathData = this.calculatePathData(cumulativeAngle, segment.percentage);
        } else {
          segmentData.pathData = "";
        }

        cumulativeAngle += segment.percentage * 3.6;

        return segmentData;
      });
    },

  },
  components: { SegmentList },
};

</script>

<style scoped>
.pie-chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    min-height: 100px;
    min-width: 100px;
    flex-direction: column;
  }
  
  .pie-chart-svg {
    width: 100%;
    height: auto;
    border-radius:  50%;
  }
  
  .pie-chart-large {
    width: 300px;
    height: 300px;
  }
  
  .pie-chart-small {
    width: 200px;
    height: 200px;
  }
  
  .cursor-pointer {
    cursor: pointer;
  }
  
  .pie-chart-text {
    font-family: Arial, sans-serif;
  }
  
  .legend {
    margin-top: 10px;
  }
  
  .pie-chart-circle {
    transition: all 0.3s ease-in-out;
  }
  
  .legend {
    margin: 10px;
  }
  .legend.top {
    order: -1;
  }
  .legend.bottom { 
    order: 1;
  }
  .legend.left, .legend.right {
    align-self: flex-start;
  }
  
</style>