import logo from '../assets/Logo.png';
import { Link, NavLink } from 'react-router-dom';
function Header(){
    return(
      <>
          <div id="nav" className='flex ml-20 mt-6 '>
            <Link to =""><img src={logo} className="h-20"/></Link>
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
                        <NavLink to="/tools" className={({isActive})=>`
                        ${isActive ? "text-red-700 underline" :" "}
                          `}>Tools</NavLink>
                      </li>
                      
                   
                    </ul>
                    <ul className='flex gap-5 justify-center items-center ml-10 font-bold '>
                    <li>
                        <NavLink to="/login" className={({isActive})=>`
                        ${isActive ? "text-red-700 underline" :" "} ml-[52rem]
                          `}><button className="bg-[#224867] rounded-lg p-1 px-5 items-end uppercase text-white font-normal">Login</button></NavLink>
                      </li>
                    </ul>
          </div>
    
      </>
    )
   
}

export default Header