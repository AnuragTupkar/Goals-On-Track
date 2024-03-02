import React from 'react'

const CategoriesCards = (props) => {
  return (
    <>
     <div className="rounded-3xl mt-4 relative h-[280px] w-[250px] ml-25 ">
                <img
                    src={props.image}
                 
                    className="z-0 h-18 rounded-md h-[280px] w-[250px]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white ">{props.categories}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                     
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                       
                    </button>
                </div>
            </div>
    
    </>
  )
}

export default CategoriesCards