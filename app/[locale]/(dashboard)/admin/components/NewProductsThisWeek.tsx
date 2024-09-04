"use client";

import React from "react";
import Chart from "react-apexcharts";
import Datepicker from "./Datepicker";

const NewProductsChart = () => {
  const options: ApexCharts.ApexOptions = {
    colors: ["#1A56DB", "#FDBA8C"],
    chart: {
      fontFamily: "Inter, sans-serif",
      foreColor: "#4B5563",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 3,
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
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
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
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };
  const series = [
    {
      name: "Digital",
      color: "#1A56DB",
      data: [
        { x: "01 Feb", y: 170 },
        { x: "02 Feb", y: 180 },
        { x: "03 Feb", y: 164 },
        { x: "04 Feb", y: 145 },
        { x: "05 Feb", y: 174 },
        { x: "06 Feb", y: 170 },
        { x: "07 Feb", y: 155 },
      ],
    },
    {
      name: "Goods",
      color: "#FDBA8C",
      data: [
        { x: "01 Feb", y: 120 },
        { x: "02 Feb", y: 134 },
        { x: "03 Feb", y: 167 },
        { x: "04 Feb", y: 179 },
        { x: "05 Feb", y: 145 },
        { x: "06 Feb", y: 182 },
        { x: "07 Feb", y: 143 },
      ],
    },
  ];

  return <Chart height={305} options={options} series={series} type="bar" />;
};

const NewProductsThisWeek = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="flex items-center">
        <div className="shrink-0">
          <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
            2,340
          </span>
          <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
            New products this week
          </h3>
        </div>
        <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-green-600 dark:text-green-400">
          14.6%
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <NewProductsChart />
      <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <a
            href="#"
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
          >
            Products Report
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

export default NewProductsThisWeek;
