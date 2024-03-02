import React from 'react'
import CategoriesCards from './CategoriesCards'
const Fitness = () => {
  return (
    <>
    <div>
        <h1 className='uppercase ml-20 mt-5 text-[2rem] font-bold'>Challenges:-</h1>
          <div className='ml-24 justify-center align-center items-center mt-28 flex gap-24'>
            <CategoriesCards image="https://www.sarkarinaukriexams.com/images/bio/1693573819-bio.png" categories="75 Days Hard Challenge"/>
            <CategoriesCards image="https://th.bing.com/th/id/OIP.xWEReZWaoSlNBWgJ5_VdlgHaK7?w=610&h=900&rs=1&pid=ImgDetMain" categories="Meditation"/>
            <CategoriesCards image="https://www.sarkarinaukriexams.com/images/bio/1693573819-bio.png" categories="Wegiht loss"/>
            
          </div>
    </div>
            
       
    </>
  )
}

export default Fitness