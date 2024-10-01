# customizable-vue-svg-pie-chart

This is a customizable Vue.js pie chart component using SVG, which allows you to create pie charts with customizable segments, colors, text sizes, legends, and more. It also includes features for interacting with the chart, such as clicking on segments, and options to show/hide a legend and a segment list.

## Features
- Customizable pie chart segments with labels, colors, and percentages.
- Text customization (size, color, and visibility).
- Clickable segments with links or custom handlers.
- Optional legend text with configurable position (top, bottom, left, or right).
- Optional segment list display.
- Validation to ensure pie chart segments total 100%.
- Dynamic updates of pie chart data (add, edit, delete segments).

## Installation

To install the dependencies, run:

```bash
npm install customizable-vue-svg-pie-chart
```

## Usage

### Props
- **data** (Array, required): The pie chart segments data. Each segment object should have the following fields:
  - `label` (String): The name of the segment.
  - `percentage` (Number): The percentage of the pie chart that this segment represents.
  - `color` (String): The color for the segment (in any valid CSS format).
  - `link` (String, optional): A URL to navigate to when the segment is clicked.
  
- **showText** (Boolean): Whether to show the percentage text on the pie chart segments. Default is `true`.

- **textSize** (Number): Font size for the percentage text. Default is `4`.

- **textColor** (String): Color of the percentage text. Default is `#1F1D1D`.

- **textClass** (String): Optional CSS class for customizing text.

- **onSegmentClick** (Function): Custom handler for when a segment is clicked. Default is `null`.

- **showLegendText** (Boolean): Whether to show the legend text for the chart. Default is `false`.

- **legendText** (String): The text for the legend. Default is `'Pie Chart'`.

- **legendPosition** (String): Position of the legend. Can be `'top'`, `'bottom'`, `'left'`, or `'right'`. Default is `'bottom'`.

- **showSegmentList** (Boolean): Whether to show the segment list below the chart. Default is `false`.

- **containerClass** (String): Additional classes for styling the pie chart container. Default is `null`.

- **strokeWidth** (Number): Width of the strokes between the segments. Default is `0.2`.

- **size** (Number): The size of the pie chart container in pixels. Default is `300`.

### Example

```vue
<template>
  <div id="app">
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
          chartWidth: 300,
          totalPercentageError: "", // Track percentage validation error
      };
    };
  },
  methods: {
    onSegmentClick(segment) {
      alert(`Clicked on segment: ${segment.label}`);
    },
  },
};
</script>
```

## Project setup

To run this project locally:

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
