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
                      <li>
                        <NavLink to="/taskstatus" className={({isActive})=>`
                        ${isActive ? "text-red-700 underline" :" "}
                          `}>Status</NavLink>
                      </li>
                   
                    </ul>
                    <ul className='flex gap-5 justify-center items-center ml-10 font-bold  '>
                    <li>
                        <NavLink to="/login" className={({isActive})=>`
                        ${isActive ? "text-red-700 underline" :" "} ml-[52rem]
                          `}><button className='text-[#224867] hover:text-white border border-[#224867] hover:bg-[#224867] focus:ring-4 focus:outline-none focus:ring-[#224867] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#224867] dark:text-[#224867] dark:hover:text-white dark:hover:bg-[#224867] dark:focus:ring-[#224867]'>Login</button></NavLink>
                      </li>
                    </ul>
                    
          </div>
    
      </>
    )
   
}

export default Header