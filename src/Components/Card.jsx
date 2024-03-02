import React from 'react'
import { FaLinkedin, FaGithub,FaInstagram, FaTwitter   } from "react-icons/fa" ;
import {MdOutlineMailOutline } from "react-icons/md"
import { Link } from 'react-router-dom';

const Card = (props) => {

    return (
        <>
    <div> 
        
            <div className="rounded-3xlmt-4 relative  h-[350px] w-[250px] ">
                <img
                    src={props.image}
                    
                    className="z-0 h-18 rounded-md bg-black  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white ">{props.memberName}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                       
                    </p>
                    <button className="mt-2 inline-flex  cursor-pointer gap-4  items-center text-sm font-semibold text-white">
                    <a href={props.linkedin} target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
                    <a href={props.github} target="_blank" rel="noopener noreferrer"><FaGithub  /></a>
                    <a href={props.email} target="_blank" rel="noopener noreferrer"><MdOutlineMailOutline/></a>
                    <a href={props.insta} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href={props.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </button>
                </div>
                
            </div>
            </div>
        </>
    )
}

export default Card