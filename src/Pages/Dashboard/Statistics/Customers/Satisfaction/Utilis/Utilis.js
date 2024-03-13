import {
  backgroundColor,
  mainThemeColor,
  whiteColor,
} from "Css/Variables";

export const RadialBarOptions = {
  chart: {
    sparkline: {
      enabled: true,
    },
  },
  colors: [mainThemeColor],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 0,
        size: "70%",
        background: whiteColor,
      },
      track: {
        background: backgroundColor,
        strokeWidth: "97%",
      },
      dataLabels: {
        value: {
          color: "#000",
          fontSize: "15px",
          fontWeight: "bold",
          show: true,
          offsetY: -15,
        },
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: [""],
};
