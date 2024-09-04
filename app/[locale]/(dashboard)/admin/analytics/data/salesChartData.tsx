export const salesChartData = {
  options: {
    stroke: {
      curve: "smooth",
    },
    chart: {
      type: "area",
      fontFamily: "Inter, sans-serif",
      foreColor: "#6B7280",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.45,
        opacityTo: 0,
        type: "vertical",
      },
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
      name: "Sales",
      data: [
        120000, 140000, 110000, 160000, 130000, 160000, 150000, 170000, 140000,
        160000, 150000, 180000,
      ],
      color: "#1A56DB",
    },
  ],
};
