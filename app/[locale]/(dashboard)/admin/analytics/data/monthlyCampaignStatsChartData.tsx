export const monthlyCampaignStatsChartData = {
  options: {
    stroke: {
      curve: "smooth",
    },
    chart: {
      type: "line",
      fontFamily: "Inter, sans-serif",
      foreColor: "#6B7280",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
    grid: {
      show: true,
      borderColor: "#F3F4F6",
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15,
      },
    },
    markers: {
      size: 5,
      strokeColors: "#ffffff",
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: ["#6B7280"],
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: "#F3F4F6",
      },
      axisTicks: {
        color: "#F3F4F6",
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#F3F4F6",
          width: 1,
          dashArray: 10,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#6B7280"],
          fontSize: "14px",
          fontWeight: 500,
        },
        formatter: function (value: number) {
          return "$" + value;
        },
      },
    },
    legend: {
      fontSize: "14px",
      fontWeight: 500,
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: ["#6B7280"],
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  },
  series: [
    {
      name: "Impressions",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
        12000,
      ],
      color: "#FDBA8C",
    },
    {
      name: "Clicks",
      data: [
        400, 800, 1200, 1600, 2000, 2400, 2800, 3200, 3600, 4000, 4400, 4800,
      ],
      color: "#8BC34A",
    },
    {
      name: "Conversions",
      data: [90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1080],
      color: "#2196F3",
    },
  ],
};
