```markdown
# Customizable Vue Pie Chart 🎨📊

Welcome to the **Customizable Vue Pie Chart**! This component is designed to provide an easy and flexible way to render pie charts in your Vue.js applications. Whether you're building a dashboard, a reporting tool, or just need to visualize data, this pie chart component can be tailored to fit your needs. 

## Features 🚀

- **Customizable Colors**: Set specific colors for each segment to match your app’s branding.
- **Dynamic Data**: Easily bind your data to the pie chart and update it on the fly.
- **Interactive Segments**: Clickable segments that can trigger actions or redirect users.
- **Legend Support**: Add legends to describe the chart segments with optional placement.
- **Text Customization**: Control the text size and color displayed on the chart.
- **Optional Segment List**: Display a list of segments with corresponding colors for better clarity.
- **Validation**: Ensure that the sum of all segment percentages equals 100% for accurate representation.

## Installation 📦

You can install the package via npm. Run the following command:

```bash
npm install customizable-vue-pie-chart
```

## Usage 👩‍💻

Here’s a quick example to get you started:

```html
<template>
  <div id="app">
    <h1>My Custom Pie Chart</h1>
    <pie-chart 
      :data="pieChartData"
      :segmentColors="segmentColors"
      :textSize="textSize"
      :textColor="textColor"
      :onSegmentClick="onSegmentClick"
      :large="isLarge"
      :showLegendText="true"
      legendText="My Pie Chart"
      legendPosition="bottom"
      :showSegmentList="true"
    ></pie-chart>
  </div>
</template>

<script>
import PieChart from 'vue-pie-chart';

export default {
  components: {
    PieChart,
  },
  data() {
    return {
      pieChartData: [
        { label: "Segment A", percentage: 30, link: "#" },
        { label: "Segment B", percentage: 50, link: "#" },
        { label: "Segment C", percentage: 20, link: "#" },
      ],
      segmentColors: ["#ff6384", "#36a2eb", "#cc65fe"],
      textSize: "4",
      textColor: "#1F1D1D",
      isLarge: true,
    };
  },
  methods: {
    onSegmentClick(segment) {
      alert(`You clicked on ${segment.label}!`);
    },
  },
};
</script>
```

### Props 📜

The `pie-chart` component accepts the following props:

- **data** (Array, required): An array of objects representing the segments of the pie chart. Each object should include a `label` and `percentage`.
  
- **segmentColors** (Array, optional): An array of colors for each segment. Defaults to `["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"]`.
  
- **textSize** (String, optional): The size of the text displayed on the segments. Default is `"4"`.
  
- **textColor** (String, optional): The color of the text. Default is `"#1F1D1D"`.
  
- **onSegmentClick** (Function, optional): A callback function that is triggered when a segment is clicked.
  
- **large** (Boolean, optional): Whether to render a larger pie chart. Default is `false`.
  
- **showLegendText** (Boolean, optional): Whether to show legend text. Default is `false`.
  
- **legendText** (String, optional): The text for the legend. Default is `"Pie Chart"`.
  
- **legendPosition** (String, optional): Position of the legend (top, bottom, left, right). Default is `"bottom"`.
  
- **showSegmentList** (Boolean, optional): Whether to display the optional segment list. Default is `false`.

- **strokeWidth** (Number, optional): Set the stroke width for each segment default set to 0.2.

## Styling 🎨

To customize the appearance of your pie chart, you can create a CSS file and apply your styles. The component supports scoped styles, allowing you to encapsulate styles for better organization.

```css
/* Example styles */
.pie-chart-container {
  max-width: 400px;
  margin: 0 auto;
}
```

## Contribution 🤝

Contributions are welcome! If you'd like to contribute to the development of this pie chart component, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the Customizable Vue Pie Chart! 🎉 If you have any questions or feedback, feel free to reach out or create an issue in the repository!
```

### Explanation of the Sections:

- **Introduction**: Briefly introduces the component and its purpose.
- **Features**: Lists the main features of the component with emojis for visual appeal.
- **Installation**: Provides installation instructions for npm.
- **Usage**: Offers a code example showing how to implement the pie chart.
- **Props**: Describes the properties that can be passed to the component.
- **Styling**: Suggests how users can customize the appearance of the component.
- **Contribution**: Invites users to contribute to the project.
- **License**: Mentions the licensing information.

Feel free to modify any part to better suit your style or add any additional sections you think might be relevant!