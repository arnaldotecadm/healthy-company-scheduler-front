import { Component, Input } from "@angular/core";
import { Chart } from "chart.js";
import { UserService } from "../user.service";

@Component({
  selector: "app-month-analysis-comparison",
  templateUrl: "./month-analysis-comparison.component.html",
  styleUrls: ["./month-analysis-comparison.component.css"],
})
export class MonthAnalysisComparisonComponent {
  pieChart: any;

  @Input() inputValues = [];

  @Input() application = "My Expenses";

  @Input() selectedLabel = "Default Account";

  selectedOption = "";

  chart: any;

  numberExceptions = 5;

  constructor(private homeService: UserService) {}

  totalIncome;
  totalExpense;

  monthAnalysis;

  dataTable = [];

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart() {
    this.homeService.getMonthAnalysisAgainstLastMonth().subscribe((data) => {
      this.monthAnalysis = data;

      let currentMonthList = data.map((item) => item.currentMonth);
      let expensesList = data.map((item) => item.lastMonth);
      let monthList = data.map((item) => item.categoryName);

      this.buildChartInfo(expensesList, monthList, currentMonthList);
    });
  }

  buildChartInfo(chartData: number[], chartlabel = [], chartData2: number[]) {
    const speedCanvas = document.getElementById("month-analysis-comparison");

    const dataFirst = {
      data: chartData,
      fill: false,
      borderColor: "#eb4034",
      backgroundColor: "#eb4034",
      pointBorderColor: "#eb4034",
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
      label: "Last Month",
    };

    const dataSecond = {
      data: chartData2,
      fill: false,
      borderColor: "#45ac09",
      backgroundColor: "#45ac09",
      pointBorderColor: "#45ac09",
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
      label: "Current Month",
    };

    const speedData = {
      labels: chartlabel,
      datasets: [dataFirst, dataSecond],
    };

    const chartOptions = {
      legend: {
        display: true,
        position: "bottom",
      },
    };

    this.chart = new Chart(speedCanvas, {
      type: "line",
      hover: false,
      data: speedData,
      options: chartOptions,
    });
  }
}
