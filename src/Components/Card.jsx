import React from 'react'

const Card = (props) => {

    return (
        <>
    
            <div className="rounded-3xl mt-4 relative h-[350px] w-[250px] ">
                <img
                    src={props.image}
                    alt="AirMax Pro"
                    className="z-0 h-18 rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white ">{props.memberName}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                       Web Devloper
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        View Profile →
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card