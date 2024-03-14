import React from 'react'
import Card from './Card'
import Anurag from '../assets/Anurag.jpg'
import Bramha from '../assets/Bramha.jpg'
import Janhavi from '../assets/Janhavi.png'
import Dhanshree from '../assets/Dhanshree.png'


const About = () => {
 
  
  return (
    <>
    <h1 className='ml-20 font-bold text-4xl my-4 underline mt-20 mb-20'>ABOUT US</h1>
    <div className='flex'>
      <div className='w-[45rem] text-justify ml-20 mb-36 '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, eligendi quisquam recusandae ab aliquid natus accusamus, deleniti vero iure quaerat nesciunt qui nulla assumenda possimus iste excepturi autem quasi distinctio, earum ut. Excepturi, omnis nulla et voluptatum maxime, voluptate architecto non minus dolor ad iste recusandae fugit, consequuntur quisquam perspiciatis doloremque quis tempora dicta cupiditate vitae. Temporibus eius, magni quae facere dignissimos error. Error accusantium quisquam, incidunt rem perferendis assumenda dolore tempore aperiam enim eius earum? Laborum dolorum, saepe exercitationem repudiandae quibusdam officia officiis molestiae sint, culpa eum sit iure ut rem magni natus reiciendis porro! Tempora corporis neque quod atque repudiandae nihil deserunt deleniti, cumque laboriosam illo minus, totam ea libero expedita tempore architecto! Ratione in consectetur odit quos nulla hic optio, quam eum, facere iste, sint repellat rem excepturi? Amet vel quia cupiditate aliquid animi ipsam corrupti, repellendus id eos! Ratione id debitis iure fugiat est, reprehenderit illum?
      </div>
      <div>
          <img className="h-[25rem] ml-40 mt-[-5rem]" src="https://media.architecturaldigest.com/photos/5f241de2c850b2a36b415024/master/w_1600%2Cc_limit/Luke-logo.pngz" alt=""/>
      </div>
    </div>
     <h1 className=' text-black p-4 rounded-xl text-4xl uppercase font-bold  ml-20 underline mb-28'>Our Team</h1>
      <div className='flex flex-wrap gap-24 justify-center mb-36'>
        <Card className="card" linkedin="https://www.linkedin.com/in/anurag-tupkar-840734238/" insta="https://www.instagram.com/anurag__tupkar/" twitter= "https://twitter.com/Anurag_Tupkar" github="https://github.com/AnuragTupkar"  email="mailto:anuragtupkar168@gmail.com" image= {Anurag} memberName = "Anurag Tupkar" />
        <Card linkedin="" insta="" twitter= "" github=""  email=""  image={Janhavi} memberName = "Janhavi Maheta" />
        <Card linkedin="" insta=" " twitter= "" github=""  email=""  className='h-[350px]' image={Bramha} memberName = "Bramhanad Tambile" />
        <Card linkedin="" insta=" " twitter= "" github=""  email=""  image={Dhanshree} memberName = "Dhanshree Walunj" />
      </div>
    </>
  )
}

export default About