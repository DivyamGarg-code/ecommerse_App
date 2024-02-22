import React from 'react'
import IntroContainer from './IntroContainer'
import Services from './Services'
import Trusted from './Trusted'
import FeatureProducts from './FeatureProducts'

function Home() {
  const data={
    title:"Welcome to Our Online Store!",
    name:"Online Store",
    content:"From the latest fashion trends to cutting-edge gadgets, from household essentials to unique artisanal finds, our store offers a diverse range of products to suit every taste and lifestyle. Whether you're searching for that perfect gift for a loved one or treating yourself to something special, you're sure to find it here."
  }
  return (
    <>
      <IntroContainer data={data}/>
      <FeatureProducts/>
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home