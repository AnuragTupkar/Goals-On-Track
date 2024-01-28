import HomeImage from "../assets/HomePageImage.png"
import { Link } from "react-router-dom";
import Background from "../assets/Background.png"
function Home() {
    return(
        <>
        <div>
            <img className="absolute z-[-1] mt-[-14rem] ml-[-2rem] blur-[1px]" src={Background} alt="" />
        </div>
            <div id="homePage" className="flex " >
                <div className="ml-20 mt-20" id="leftSection">
                    <h1 className="font-bold tracking-widest text-8xl mt-10">GOALS ON<br/> TRACK</h1>
                    <p className="tracking-[0.13rem] uppercase leading-[3.2rem] mx-4  mt-5 text-3xl ">Create Streaks Of Success For<br/> Your Habits And <br/>Complete Your Task.</p>
                    
                    <Link to="categories"><button className="bg-[#224867] p-2 pl-4 pr-4 rounded-lg text-white ml-4 mt-4">GET STARTED</button></Link>
                </div>

                <div id="rightSection">
                    <img className=" h-[38rem] ml-44 "src={HomeImage}/>
                </div>
            </div>
        
        </>
    )
}

export default Home;