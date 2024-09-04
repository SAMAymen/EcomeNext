"use client";

import { useThemeMode } from "flowbite-react";
import Chart from "react-apexcharts";
import Datepicker from "./Datepicker";

const UserSignupsChart = () => {
  const { mode } = useThemeMode();
  const isDarkTheme = mode === "dark";

  const backgroundBarColors = isDarkTheme
    ? [
        "#374151",
        "#374151",
        "#374151",
        "#374151",
        "#374151",
        "#374151",
        "#374151",
      ]
    : [
        "#E5E7EB",
        "#E5E7EB",
        "#E5E7EB",
        "#E5E7EB",
        "#E5E7EB",
        "#E5E7EB",
        "#E5E7EB",
      ];

  const options: ApexCharts.ApexOptions = {
    labels: [
      "01 Feb",
      "02 Feb",
      "03 Feb",
      "04 Feb",
      "05 Feb",
      "06 Feb",
      "07 Feb",
    ],
    chart: {
      foreColor: "#4B5563",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#1A56DB",
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        borderRadius: 3,
        colors: {
          backgroundBarColors,
          backgroundBarRadius: 3,
        },
      },
    },
    xaxis: {
      floating: true,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.8,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };
  const series = [
    {
      name: "Users",
      data: [34, 45, 53, 38, 55, 32, 36],
    },
  ];

  return <Chart height={305} options={options} series={series} type="bar" />;
};

const UserSignupsThisWeek = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="flex items-center">
        <div className="shrink-0">
          <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
            385
          </span>
          <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
            User signups this week
          </h3>
        </div>
        <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-red-600 dark:text-red-400">
          -2.7%
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <UserSignupsChart />
      <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <a
            href="#"
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
          >
            Users Report
            <svg
              className="ml-1 h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserSignupsThisWeek;
