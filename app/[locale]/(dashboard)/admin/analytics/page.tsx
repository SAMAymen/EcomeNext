"use client";

import React from "react";
import { salesChartData } from "./data/salesChartData";
import Chart from "react-apexcharts";
import { earningsChartData } from "./data/earningsChartData";
import { supportTrackerChartData } from "./data/supportTrackerChartData";
import { salesByCountryChartData } from "./data/salesByCountryChartData";
import { monthlyCampaignStatsChartData } from "./data/monthlyCampaignStatsChartData";
import { sourceVisitsChartData } from "./data/sourceVisitsChartData";

interface StatisticCardProps {
  title: string;
  value: string;
  percentage?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  percentage,
}) => (
  <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
      {title}
    </h3>
    <div className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
      {value}
    </div>
    {percentage && (
      <div
        className={`mt-2 text-base font-bold ${
          parseFloat(percentage) > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {percentage}
      </div>
    )}
  </div>
);

const AnalyticsPage = () => {
  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">
          Analytics Dashboard
        </h1>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          Welcome to your analytics dashboard. Here you can view your sales,
          earnings, and other important metrics.
        </p>
      </div>

      {/* Average Daily Sales */}

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatisticCard title="Total Sales This Month" value="$28,450" />

        <StatisticCard
          title="Sales Overview"
          value="$42.5k"
          percentage="+18.2%"
        />

        <StatisticCard title="Order" value="6,440" percentage="62.2%" />
      </div>

      {/* Sales Chart */}

      <div className="mb-4">
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
          <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
            Sales Chart
          </h3>

          <Chart
            options={salesChartData.options as ApexCharts.ApexOptions}
            series={salesChartData.series}
            type="area"
            height={350}
          />
        </div>
      </div>

      {/* Earnings and Support Charts */}

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <EarningsOverview chartData={earningsChartData} />

        <SupportTracker chartData={supportTrackerChartData} />
      </div>

      {/* Sales by Countries */}

      <div className="mb-4">
        <SalesByCountry chartData={salesByCountryChartData} />
      </div>

      {/* Monthly Campaign Stats */}

      <div className="mb-4">
        <MonthlyCampaignStats chartData={monthlyCampaignStatsChartData} />
      </div>

      {/* Source Visits */}

      <div className="mb-4">
        <SourceVisits chartData={sourceVisitsChartData} />
      </div>
    </div>
  );
};

const EarningsOverview = ({ chartData }: { chartData: any }) => (
  <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
      Weekly Earnings Overview
    </h3>

    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  </div>
);

const SupportTracker = ({ chartData }: { chartData: any }) => (
  <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-xl:p-8">
    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
      Support Tracker
    </h3>

    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={350}
    />
  </div>
);

const SalesByCountry = ({ chartData }: { chartData: any }) => (
  <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
      Sales by Countries
    </h3>

    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  </div>
);

const MonthlyCampaignStats = ({ chartData }: { chartData: any }) => (
  <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
      Monthly Campaign Stats
    </h3>

    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={350}
    />
  </div>
);

const SourceVisits = ({ chartData }: { chartData: any }) => (
  <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
      Source Visits
    </h3>

    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  </div>
);

export default AnalyticsPage;
