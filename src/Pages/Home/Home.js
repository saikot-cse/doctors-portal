import React from 'react'
import { Banner } from './Banner'
import { ExtraInfo } from './ExtraInfo'
import { Info } from './Info'
import { Services } from './Services'


export const Home = () => {
  return (
    <div className='px-12'>
      <Banner/>
      <Info/>
      <Services/>
      <ExtraInfo/>
    </div>
  )
}
