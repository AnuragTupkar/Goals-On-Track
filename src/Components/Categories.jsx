import React from 'react'
import CategoriesCards from './CategoriesCards'
const Categories = () => {
  return (
    <>
        <div>
            <h1 className='ml-20 font-bold text-5xl mt-20'>Choose Your Goal:-</h1>
            <div className='flex gap-6 ml-30 mt-20'>
                <CategoriesCards image="https://www.sarkarinaukriexams.com/images/bio/1693573819-bio.png" categories="75 Days Hard Challenge"/>
                <CategoriesCards image="" categories="Study"/>
                <CategoriesCards image="" categories="Fitness"/>
                <CategoriesCards image="" categories="Sports"/>
                <CategoriesCards image="" categories="Custom"/>
            </div>

        </div>
    </>
  )
}

export default Categories