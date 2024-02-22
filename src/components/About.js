import React from 'react'
import IntroContainer from './IntroContainer'

function About() {
  const data = {
    title:"Welcome to Our Online Store!",
    name: "Online Store",
    content: "We're more than just an online retailer – we're your one-stop destination for all things shopping. With a vast array of products carefully curated to cater to your every need and desire, we strive to make your shopping experience seamless, enjoyable, and most importantly, convenient."
  }
  return (
    <>
      <IntroContainer data={data} />
    </>
  )
}

export default About