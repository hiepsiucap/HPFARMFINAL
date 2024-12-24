/** @format */

import React, { Component } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // Import the ApexOptions type

// Define the props interface for labels and data
interface BasicProps {
  categories: string[]; // These will become pie chart labels
  data: number[]; // This will be the pie chart data
}

interface ChartState {
  options: ApexOptions; // Use ApexOptions for correct typing
  series: number[]; // Pie chart requires a number array for the data
}

class BasicPie extends Component<BasicProps, ChartState> {
  constructor(props: BasicProps) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-pie",
          fontFamily: "Lexend, sans-serif",
          type: "pie", // Set the chart type to 'pie'
        },
        labels: props.categories, // Use categories as labels for the pie chart
        colors: ["#28a745", "#ff4560", "#008ffb", "#feb019"], // Optional: custom colors for the pie slices
      },
      series: props.data, // Pie chart only uses a single data series
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="pie" // Set the chart type to 'pie'
              width="700"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BasicPie;
