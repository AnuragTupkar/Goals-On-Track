import logo from '../assets/Logo.png';
import { Link, NavLink } from 'react-router-dom';
function Header(){
    return(
      <>
          <div id="nav" className='flex ml-20 m-10 '>
            <a><img src={logo} className="h-20"></img></a>
                    <ul className='flex gap-5 justify-center items-center ml-10 font-bold '>
                      
                      <li><NavLink to="/" className={({isActive})=>`
                        ${isActive ? "text-red-700 underline" :" "}
                          `}>Home</NavLink>
                        </li>

                      <li>
                        <NavLink to="/about" className={({isActive})=>`
                        ${isActive ? "text-red-700 underline" :" "}
                          `}>About</NavLink>
                      </li>
                    
                      <li>
                        <NavLink to="/login" className={({isActive})=>`
                        ${isActive ? "text-red-700 underline" :" "}
                          `}>Tools</NavLink>
                      </li>
                      
                   
                    </ul>
                    <ul className='flex gap-5 justify-center items-center ml-10 font-bold '>
                    <li>
                        <NavLink to="/tools" className={({isActive})=>`
                        ${isActive ? "text-red-700 underline" :" "}
                          `}><button className="bg-violet-700 rounded-lg p-1 px-5 items-end uppercase text-white font-normal">Login</button></NavLink>
                      </li>
                    </ul>
          </div>
    
      </>
    )
   
}

export default Header