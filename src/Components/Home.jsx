import HomeImage from "../assets/HomePageImage.png"
function Home() {
    return(
        <>
            <div id="homePage" className="flex">
                <div className="ml-20 mt-20" id="leftSection">
                    <h1 className="font-bold text-8xl">GOALS ON<br/> TRACK</h1>
                    <p className="uppercase leading-9 ml-4 mt-4 text-2xl ">Create Streaks Of Success For<br/>Your Habits And <br/> Complete Your Task.</p>
                    
                    <button className="bg-violet-800 p-2 pl-4 pr-4 rounded-lg text-white ml-4 mt-4">GET STARTED</button>
                </div>

                <div id="rightSection">
                    <img className=" h-[44rem] ml-64 "src={HomeImage}/>
                </div>
            </div>
        
        </>
    )
}

export default Home;