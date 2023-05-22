import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({type, time ,place, info}) => {
    const ref = useRef(null)
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between' ref={ref}>
            <LiIcon refrence={ref} />
            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration: 0.5 ,type:'spring'}}>
                <h3 className='font-bold text-2xl capitalize'>{type}</h3>
                <span className='capitalize font-medium text-dark/75'>{time} | {place}</span>
                <p className='w-full font-medium'>{info}</p>
            </motion.div>
        </li>
    )

}

const Education = () => {
   const ref  = useRef(null)
   const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end","center start"]
   })
  return (
    <div className="my-64">
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
        <div className="w-[75%] mx-auto relative" ref={ref}>
            <motion.div style={{scaleY: scrollYProgress }} className='absolute top-0 left-9 w-[4px] bg-dark h-full origin-top'></motion.div>
            <ul className='w-full flex flex-col justify-between items-start ml-4'>
                <Details 
                type="Bachelor Of Science In Computer Science" 
                time="2016-2020" 
                place="Massachusetts Institute Of Technology (MIT)"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence." />
                
                <Details 
                type="Master Of Computer Science" 
                time="2016-2020" 
                place="Massachusetts Institute Of Technology (MIT)"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence." />

                <Details 
                type="Bachelor Of Science In Computer Science" 
                time="2016-2020" 
                place="Massachusetts Institute Of Technology (MIT)"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence." />
                
            </ul>
        </div>
    </div>
  )
}

export default Education