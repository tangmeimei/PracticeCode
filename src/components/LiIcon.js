import { useScroll,motion } from 'framer-motion'
import React from 'react'

const LiIcon = ({refrence}) => {
  const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["center end","center center"]
  })
  return (
    <figure className='absolute left-0 stroke-dark'>
       <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className='stroke-primary stroke-1 fill-none'></circle>
            <motion.circle cx="75" cy="50" r="20"  className='stroke-[5px] fill-light' style={{
                pathLength: scrollYProgress
            }}></motion.circle>
            <circle cx="75" cy="50" r="10" className='stroke-1 fill-primary animate-pulse'></circle>
       </svg>
    </figure>
  )
}

export default LiIcon