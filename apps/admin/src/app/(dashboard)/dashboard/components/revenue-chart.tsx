'use client';

import ReactApexChart from 'react-apexcharts';

const RevenueChart = () => {
  const series = [
    {
      name: 'Sales',
      data: [
        23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000,
        34000, 78000,
      ],
    },
  ];

  const options = {
    chart: {
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '16px',
        borderRadius: 0,
      },
    },
    legend: {
      show: false,
    },
    fill: {
      colors: ['#3b82f6', '#a855f7'],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 8,
      colors: ['transparent'],
    },
    grid: {
      strokeDashArray: 2,
    },
    xaxis: {
      type: 'category',
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      labels: {
        align: 'left',
        style: {
          fontSize: '14px',
          fontWeight: 400,
        },
        offsetX: -2,
        formatter: (title: string) => title?.slice(0, 3),
      },
    },
    yaxis: {
      labels: {
        align: 'left',
        minWidth: 0,
        maxWidth: 140,
        style: {
          fontSize: '14px',
          fontWeight: 400,
        },
        formatter: (value: number) =>
          value >= 1000 ? `${value / 1000}k` : value,
      },
    },
    tooltip: {
      x: {
        format: 'MMMM yyyy',
      },
      y: {
        formatter: (value: number) =>
          `${value >= 1000 ? `${value / 1000}k` : value}`,
      },
    },
  };

  return (
    <div className="w-full rounded-sm border bg-white shadow-sm lg:col-span-1">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Montly Revenue
      </p>
      <ReactApexChart
        type="area"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        /* @ts-expect-error */
        options={options}
        series={series}
        height={350}
      />
    </div>
  );
};

export default RevenueChart;
