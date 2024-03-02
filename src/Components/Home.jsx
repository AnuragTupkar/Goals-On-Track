import HomeImage from "../assets/HomePageImage.png"
import { Link } from "react-router-dom";
import Background from "../assets/Background.png"
function Home() {
    return(
        <>
        <div>
            <img className="animate-pulse absolute z-[-1] mt-[-14rem] ml-[-2rem] blur-[1px]  " src={Background} alt="" />
        </div>
            <div id="homePage" className="flex " >
                <div className="ml-20 mt-20" id="leftSection">
                    <h1 className="font-bold  tracking-widest text-8xl mt-10">GOALS ON<br/> TRACK</h1>
                    <p className="tracking-[0.13rem] uppercase leading-[2.8rem] mx-4  mt-5 text-3xl font-thin ">Create Streaks Of Success For<br/> Your Habits And Complete <br/> Your Task.</p>
                    
                    <Link to="categories"><button className='text-[#224867] inline hover:text-white border border-[#224867] hover:bg-[#224867] focus:ring-4 focus:outline-none focus:ring-[#224867] font-medium rounded-lg text-sm px-12 ml-4 mt-4 py-2.5 text-center me-2 mb-2 dark:border-[#224867] dark:text-[#224867] dark:hover:text-white dark:hover:bg-[#224867] dark:focus:ring-[#224867]'>GET STARTED</button></Link>
                </div>

                <div id="rightSection">
                    <img className=" h-[38rem] ml-44 "src={HomeImage}/>
                </div>
            </div>
        
        </>
    )
}

export default Home;