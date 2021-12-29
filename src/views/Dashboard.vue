<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="All User"
            type="gradient-red"
            sub-title="350,897"
            icon="ni ni-user-run"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2">
                <em class="fa fa-user"></em> 3.48%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Disbursements"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-danger mr-2">
                <em class="fa fa-arrow-down"></em> 5.72%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Collection"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-collection"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2">
                <em class="fa fa-arrow-up"></em> 12.18%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Collected"
            type="gradient-info"
            sub-title="49,65%"
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2">
                <em class="fa fa-arrow-up"></em> 54.8%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <!--Charts-->
      <div class="row">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col">
                  <h5 class="h3 text-white mb-0">
                    Disbursement VS Loan Collected
                  </h5>
                </div>
              </div>
            </template>
            <div class="chart-area">
              <canvas :height="350" :id="salesChartID"></canvas>
            </div>
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </div>
        <div class="col-xl-4">
          <social-traffic-table></social-traffic-table>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>
<script>
// Charts
// import Chart from "chart.js";

// let chart;

export default {
  components: {
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
      },
    };
  },
  // methods: {
  //   initBigChart(index) {
  //     chart.destroy();
  //     chart = new Chart(
  //       document.getElementById(this.salesChartID).getContext("2d"),
  //       {
  //         type: "line",
  //         data: {
  //           labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //           datasets: [
  //             {
  //               label: "Performance",
  //               tension: 0.4,
  //               borderWidth: 4,
  //               borderColor: "#5e72e4",
  //               pointRadius: 0,
  //               backgroundColor: "transparent",
  //               data: this.bigLineChart.allData[index],
  //             },
  //           ],
  //         },
  //         options: {
  //           responsive: true,
  //           maintainAspectRatio: false,
  //           legend: {
  //             display: false,
  //           },
  //           tooltips: {
  //             enabled: true,
  //             mode: "index",
  //             intersect: false,
  //           },
  //           scales: {
  //             yAxes: [
  //               {
  //                 barPercentage: 1.6,
  //                 gridLines: {
  //                   drawBorder: false,
  //                   color: "rgba(29,140,248,0.0)",
  //                   zeroLineColor: "transparent",
  //                 },
  //                 ticks: {
  //                   padding: 0,
  //                   fontColor: "#8898aa",
  //                   fontSize: 13,
  //                   fontFamily: "Open Sans",
  //                 },
  //               },
  //             ],
  //             xAxes: [
  //               {
  //                 barPercentage: 1.6,
  //                 gridLines: {
  //                   drawBorder: false,
  //                   color: "rgba(29,140,248,0.0)",
  //                   zeroLineColor: "transparent",
  //                 },
  //                 ticks: {
  //                   padding: 10,
  //                   fontColor: "#8898aa",
  //                   fontSize: 13,
  //                   fontFamily: "Open Sans",
  //                 },
  //               },
  //             ],
  //           },
  //           layout: {
  //             padding: 0,
  //           },
  //         },
  //       }
  //     );
  //     this.bigLineChart.activeIndex = index;
  //   },
  // },
  // mounted() {
  //   chart = new Chart(
  //     document.getElementById(this.salesChartID).getContext("2d"),
  //     {
  //       type: "line",
  //       data: {
  //         labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //         datasets: [
  //           {
  //             label: "Performance",
  //             tension: 0.4,
  //             borderWidth: 4,
  //             borderColor: "#5e72e4",
  //             pointRadius: 0,
  //             backgroundColor: "transparent",
  //             data: this.bigLineChart.allData[1],
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         legend: {
  //           display: false,
  //         },
  //         tooltips: {
  //           enabled: true,
  //           mode: "index",
  //           intersect: false,
  //         },
  //         scales: {
  //           yAxes: [
  //             {
  //               barPercentage: 1.6,
  //               gridLines: {
  //                 drawBorder: false,
  //                 color: "rgba(29,140,248,0.0)",
  //                 zeroLineColor: "transparent",
  //               },
  //               ticks: {
  //                 padding: 0,
  //                 fontColor: "#8898aa",
  //                 fontSize: 13,
  //                 fontFamily: "Open Sans",
  //               },
  //             },
  //           ],
  //           xAxes: [
  //             {
  //               barPercentage: 1.6,
  //               gridLines: {
  //                 drawBorder: false,
  //                 color: "rgba(29,140,248,0.0)",
  //                 zeroLineColor: "transparent",
  //               },
  //               ticks: {
  //                 padding: 10,
  //                 fontColor: "#8898aa",
  //                 fontSize: 13,
  //                 fontFamily: "Open Sans",
  //               },
  //             },
  //           ],
  //         },
  //         layout: {
  //           padding: 0,
  //         },
  //       },
  //     }
  //   );
  // },
};
</script>
