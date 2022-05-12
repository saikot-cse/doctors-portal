import React from 'react'
import { Banner } from './Banner'
import { ExtraInfo } from './ExtraInfo'
import { Info } from './Info'
import { MakeAppoinment } from './MakeAppoinment'
import { Services } from './Services'
import { Testimonials } from './Testimonials'


export const Home = () => {
  return (
    <div className='px-12'>
      <Banner/>
      <Info/>
      <Services/>
      <ExtraInfo/>
      <MakeAppoinment/>
      <Testimonials/>
    </div>
  )
}
