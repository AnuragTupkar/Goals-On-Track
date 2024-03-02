import React from 'react'
import CategoriesCards from './CategoriesCards'
import OrganizedMan from '../assets/OrganizedMan.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
        <div>
            <h1 className='ml-20 font-bold text-5xl mt-20'>Choose Your Goal:-</h1>
            <div className='flex gap-6 ml-24 mt-20'>
                
                <Link to="/fitness"><CategoriesCards image="https://www.sarkarinaukriexams.com/images/bio/1693573819-bio.png" categories="Fitness"/></Link>
                <Link to="/Study"><CategoriesCards image={OrganizedMan} categories="Study"/></Link>
                <Link to="/travel"><CategoriesCards image="https://i.pinimg.com/originals/52/3e/55/523e554735e1a29e0d8a765ed26166f6.jpg" categories="Travel"/></Link>
                <CategoriesCards image="https://th.bing.com/th/id/OIP.ZVCMdC9XSN0IU7U-VWaVIAHaHc?rs=1&pid=ImgDetMain" categories="Finance"/>
                <Link to="/custom"><CategoriesCards image="https://th.bing.com/th?q=Cool+Settings+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" categories="Other"/></Link>
            </div>

        </div>
    </>
  )
}

export default Categories