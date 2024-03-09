import React from 'react'
import { Page } from 'Css/PageStyles'
import SectionOne from './Sections/SectionOne/SectionOne'
import SectionTwo from './Sections/SectionTwo/SectionTwo'
import SectionThree from './Sections/SectionThree/SectionThree'
import FeaturedProperties from './Sections/FeaturedProperties/FeaturedProperties'

const Home = () => {
  return (
    <Page>
      <SectionOne/>
      <SectionTwo/>
      <FeaturedProperties/>
      <SectionThree/>
    </Page>
  )
}

export default Home