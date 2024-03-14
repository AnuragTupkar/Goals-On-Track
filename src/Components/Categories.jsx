import React from 'react'
import CategoriesCards from './CategoriesCards'
import OrganizedMan from '../assets/OrganizedMan.jpg'
import { Link } from 'react-router-dom'
import goal from '../assets/goal.png'
const Categories = () => {
  return (
    <>
        <div>
            <h1 className='ml-20 font-bold text-5xl mt-20'>Choose Your Goal:-</h1>
            <div className='flex gap-14 ml-44 mt-20'>
                
                <Link to="/custom"><CategoriesCards  image={goal} categories="Create Your Goal"/></Link>
                <Link to="/fitness"><CategoriesCards image="https://www.sarkarinaukriexams.com/images/bio/1693573819-bio.png" categories="Fitness"/></Link>
                <Link to="/Study"><CategoriesCards image={OrganizedMan} categories="Study"/></Link>
                <Link to="/project"><CategoriesCards image="https://th.bing.com/th/id/OIP.u4EBes6Muu2fy7iM8igMugAAAA?rs=1&pid=ImgDetMain" categories="Project"/></Link>

            </div>

        </div>
    </>
  )
}

export default Categories