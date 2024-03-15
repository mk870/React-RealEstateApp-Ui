const getLabel = (label) => {
  if (window.matchMedia("(max-width: 500px)").matches) {
    if (label === firstLabel) return "1st";
    else if (label === secondLabel) return "2nd";
    else if (label === thirdLabel) return "3rd";
    else if (label === fourthLabel) return "4th";
    else if (label === fifthLabel) return "5th";
    else if (label === sixthLabel) return "6th";
    else return "7th";
  } else {
    return label;
  }
};
export const firstLabel = "Initial Call";
export const secondLabel = "Agent Approval";
export const thirdLabel = "Offer Verification";
export const fourthLabel = "Tax Clearence";
export const fifthLabel = "Purchase Contract";
export const sixthLabel = "Property Inspection";
export const seventhLabel = "Sale";
export const funnelOptions = {
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: "80%",
      isFunnel: true,
    },
  },
  colors: ["#0A573B"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    dropShadow: {
      enabled: true,
    },
    textAnchor: "middle",
    style: {
      fontSize: "10",
    },
  },
  title: {
    text: "Sales Funnel",
    align: "middle",
  },
  xaxis: {
    categories: [
      getLabel(firstLabel),
      getLabel(secondLabel),
      getLabel(thirdLabel),
      getLabel(fourthLabel),
      getLabel(fifthLabel),
      getLabel(sixthLabel),
      getLabel(seventhLabel),
    ],
  },
  legend: {
    show: false,
  },
};
