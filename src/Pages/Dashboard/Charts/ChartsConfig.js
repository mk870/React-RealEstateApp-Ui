//import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
  {
    name: "Properties For Sale",
    data: [18, 12, 11, 25, 14, 17, 19],
  },
  {
    name: "Rental Properties",
    data: [6, 8, 7, 4, 10, 13, 14],
  },
];
export const pieChartsData = [
  {
    title: "Properties For Sale",
    value: 284,
    series: [75, 25],
    color: ["#475be8", "#b2c8ec"],
    change: 17.31
  },
  {
    title: "Rental Properties",
    value: 190,
    series: [68, 32],
    color: ["#12801c", "#afe9b3"],
    change: -5.60
  },
  {
    title: "Properties Sold",
    value: 230,
    series: [83, 17],
    color: ["#ee0e19", "#ecbcbc"],
    change: 12.65
  },
  {
    title: "Property Agents",
    value: 170,
    series: [44, 56],
    color: ["#75139c", "#dfb0f0"],
    change: 9.87
  },
];
export const TotalRevenueOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#475BE8", "#CFC8FF"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    title: {
      text: "$ (million)",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} million`;
      },
    },
  },
};

export const propertyReferralsInfo = [
  {
    title: "Social Media",
    percentage: 64,
    color: "#6C5DD3",
  },
  {
    title: "Marketplace",
    percentage: 40,
    color: "#7FBA7A",
  },
  {
    title: "Websites",
    percentage: 50,
    color: "#FFCE73",
  },
  {
    title: "Digital Ads",
    percentage: 80,
    color: "#FFA2C0",
  },
  {
    title: "Others",
    percentage: 15,
    color: "#F45252",
  },
];

export const customersSeries = [
  {
    name: "Customer",
    data: [
      1800, 2567, 2354, 4000, 4100, 3500, 5100, 4900, 6200, 6900, 9100, 9595,
    ],
  },
];

export const customersOptions = {
  chart: {
    height: 320,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Subscriptions per month",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
    ],
  },
};
