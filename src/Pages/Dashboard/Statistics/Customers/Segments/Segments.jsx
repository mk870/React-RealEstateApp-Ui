import React from 'react'
import * as styled from './SegmentsStyles'
import { mainThemeColor, secondaryThemeColor } from 'Css/Variables'
import Counter from 'Pages/Dashboard/Counter/Counter'

const Segments = () => {
  const categories = [
    {
      number: 1,
      name:"Equity Firms",
      percentage: 38,
      color: "#060270",
    },
    {
      number: 2,
      name:"Individuals",
      percentage: 30,
      color: mainThemeColor,
    },
    {
      number: 3,
      name:"Developers",
      percentage: 21,
      color: "#4E165D",
    },
    {
      number: 4,
      name:"Gvt Entities",
      percentage: 7,
      color: "black",
    },
    {
      number: 5,
      name:"Other",
      percentage: 4,
      color: secondaryThemeColor,
    },
  ]
  return (
    <styled.container>
      <styled.Title>Customer Segmentation</styled.Title>
      <styled.Wrapper>
        <styled.Categories>
        <styled.List>
          {
            categories.map((category)=>(
              <styled.ListItem key={category.number} color={category.color}>
                {category.name}
              </styled.ListItem>
            ))
          }
        </styled.List>
        </styled.Categories>
        <styled.Bars>
          {
            categories.map((category)=>(
              <styled.Bar key={category.number} color={category.color}>
                <Counter amount={category.percentage} speed={1}/>%
              </styled.Bar>
            ))
          }
        </styled.Bars>
      </styled.Wrapper>
    </styled.container>
  )
}

export default Segments