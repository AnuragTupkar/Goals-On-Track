import React from 'react'
import Card from './Card'
import Anurag from '../assets/Anurag.jpg'
const About = () => {
  return (
    <>
     <h1 className=' text-black p-4 rounded-xl text-4xl uppercase font-bold mx-auto text-center'>Our Team</h1>
      <div className='flex flex-wrap gap-10 justify-center '>
        <Card image= {Anurag} memberName = "Anurag Tupkar" />
        <Card memberName = "e" />
        <Card memberName = "a" />
        <Card memberName = "m" />
      </div>
    </>
  )
}

export default About