'use client';

import ReactApexChart from 'react-apexcharts';

const TopSellingCategories = () => {
  const series = [
    { data: [[5, 6, 70]] },
    { data: [[8, 4, 45]] },
    { data: [[10, 9, 90]] },
  ];

  const options = {
    chart: {
      height: '100%',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      style: {
        fontSize: '20px',
        fontWeight: '400',
        colors: ['#fff', '#1f2937', '#fff'],
      },
      formatter: (value: number) => (value ? `${value}%` : ''),
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 5,
    },
    plotOptions: {
      bubble: {
        zScaling: false,
        minBubbleRadius: 40,
      },
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    xaxis: {
      min: 0,
      max: 15,
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
      min: 0,
      max: 15,
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
  };

  return (
    <div className="w-full rounded-sm border bg-white shadow-sm lg:col-span-1">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Top Selling Categories
      </p>

      <div>
        <ReactApexChart
          type="bubble"
          options={options}
          series={series}
          height={350}
        />

        <div className="flex items-center gap-x-3 px-4 pb-4">
          <div className="inline-flex items-center">
            <span className="me-2 inline-block size-2 rounded-full bg-[#ffb01a]" />
            <span className="text-gray-600 dark:text-gray-400">
              Electronics
            </span>
          </div>
          <div className="inline-flex items-center">
            <span className="me-2 inline-block size-2 rounded-full bg-[#008ffb]" />
            <span className="text-gray-600 dark:text-gray-400">Mobile</span>
          </div>
          <div className="inline-flex items-center">
            <span className="me-2 inline-block size-2 rounded-full bg-[#00e396]" />
            <span className="text-gray-600 dark:text-gray-400">
              Accessories
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingCategories;
