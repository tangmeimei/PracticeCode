import { motion } from 'framer-motion'
import React from 'react'

const Skill=({name,x,y}) => {
 return (
    <motion.div 
    className='flex items-center justify-center bg-dark text-light font-semibold py-3 px-8 cursor-pointer rounded-full absolute shadow-dark'
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    whileHover={{scale: 1.05}}
    transition={{duration:1.5}}
    viewport={{once:true}}
    >
     {name}
    </motion.div> 
 )
}
const Skills = () => {
  return (
     <> 
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center bg-circular rounded-full'>
          <motion.div 
          className='flex items-center justify-center bg-dark text-light font-semibold py-3 px-8 cursor-pointer rounded-full shadow-dark absolute'
          whileHover={{scale: 1.05}}
          >
             web
          </motion.div>
          <Skill name="HTML" x="-5vw" y="-10vw"/>
          <Skill name="Css" x="9vw" y="-19vw"/>
          <Skill name="JavaScript" x="-20vw" y="-20vw"/>
          <Skill name="Vuejs" x="20vw" y="-15vw"/>
          <Skill name="Reactjs" x="30vw" y="-20vw"/>
          <Skill name="Tailwind css" x="10vw" y="10vw"/>
          <Skill name="Java" x="-20vw" y="10vw"/>
          <Skill name="Nextjs" x="30vw" y="2vw"/>
          <Skill name="Sql" x="-28vw" y="-5vw"/>
      </div>
     </>
  )
}

export default Skills