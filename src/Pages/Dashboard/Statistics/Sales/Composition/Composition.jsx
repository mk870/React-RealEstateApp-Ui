import React from 'react'
import * as styled from './CompositionStyles'
import PieChart from 'Pages/Dashboard/Charts/PieChart/PieChart'

const Composition = () => {
  const showLegend = ()=>{
    if (window.matchMedia("(max-width: 370px)").matches) {
      return false
    } else {
      return true
    }
  }
  const size = ()=>{
    if (window.matchMedia("(max-width: 370px)").matches) {
      return "300px"
    } else {
      return "350px"
    }
  }
  return (
    <styled.container>
      <styled.Title>Sales Composition <styled.text>(last 6 months)</styled.text></styled.Title>
      <PieChart
          type={"pie"}
          width={size()}
          enableLabels={true}
          showLegend={showLegend()}
          colors={["#4E165D", "#a7060e" ]}
          labels={["Cash", "Credit"]}
          series={[45, 55]}
        />
    </styled.container>
  )
}

export default Composition