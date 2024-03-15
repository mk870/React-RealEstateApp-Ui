const labels = (label) => {
  if (window.matchMedia("(max-width: 500px)").matches) {
    if (label === classOne) return "Type1";
    else if (label === classTwo) return "Type2";
    else if (label === classThree) return "Type3";
    else if (label === classFour) return "Type4";
    else if (label === classFive) return "Type5";
    else return "Type6";
  } else {
    return label;
  }
};
export const heatMapOptions = {
  chart: {
    type: "heatmap",
  },
  dataLabels: {
    enabled: true,
  },
  colors: ["#75139c"],
  title: {
    text: "Property Types Sold",
  },
};
export const classOne = "Multi Family House";
export const classTwo = "Single Family House";
export const classThree = "Condo";
export const classFour = "Vacation House";
export const classFive = "Town House";
export const classSix = "Apartment";
export const series = [
  {
    name: labels(classOne),
    data: [
      {
        x: "$(0-1)M",
        y: 34,
      },
      {
        x: "$(1-3)M",
        y: 43,
      },
      {
        x: "$(3-5)M",
        y: 17,
      },
      {
        x: "$(5-10)M",
        y: 11,
      },
      {
        x: "$(over 10)M",
        y: 7,
      },
    ],
  },
  {
    name: labels(classTwo),
    data: [
      {
        x: "$(0-1)M",
        y: 42,
      },
      {
        x: "$(1-3)M",
        y: 59,
      },
      {
        x: "$(3-5)M",
        y: 21,
      },
      {
        x: "$(5-10)M",
        y: 16,
      },
      {
        x: "$(over 10)M",
        y: 12,
      },
    ],
  },
  {
    name: labels(classThree),
    data: [
      {
        x: "$(0-1)M",
        y: 12,
      },
      {
        x: "$(1-3)M",
        y: 29,
      },
      {
        x: "$(3-5)M",
        y: 33,
      },
      {
        x: "$(5-10)M",
        y: 48,
      },
      {
        x: "$(over 10)M",
        y: 19,
      },
    ],
  },
  {
    name: labels(classFour),
    data: [
      {
        x: "$(0-1)M",
        y: 2,
      },
      {
        x: "$(1-3)M",
        y: 4,
      },
      {
        x: "$(3-5)M",
        y: 11,
      },
      {
        x: "$(5-10)M",
        y: 19,
      },
      {
        x: "$(over 10)M",
        y: 13,
      },
    ],
  },
  {
    name: labels(classFive),
    data: [
      {
        x: "$(0-1)M",
        y: 52,
      },
      {
        x: "$(1-3)M",
        y: 41,
      },
      {
        x: "$(3-5)M",
        y: 23,
      },
      {
        x: "$(5-10)M",
        y: 14,
      },
      {
        x: "$(over 10)M",
        y: 5,
      },
    ],
  },
  {
    name: labels(classSix),
    data: [
      {
        x: "$(0-1)M",
        y: 49,
      },
      {
        x: "$(1-3)M",
        y: 33,
      },
      {
        x: "$(3-5)M",
        y: 24,
      },
      {
        x: "$(5-10)M",
        y: 10,
      },
      {
        x: "$(over 10)M",
        y: 16,
      },
    ],
  },
];
