import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({positon, company, companyLink, time ,address, work}) => {
    const ref = useRef(null)
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between' ref={ref}>
            <LiIcon refrence={ref} />
            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration: 0.5 ,type:'spring'}}>
                <h3 className='font-bold text-2xl capitalize'>{positon}&nbsp;<a href={companyLink} className='text-primary capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>{time} | {address}</span>
                <p className='w-full font-medium'>{work}</p>
            </motion.div>
        </li>
    )

}

const Experience = () => {
   const ref  = useRef(null)
   const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end","center start"]
   })
  return (
    <div className="my-64">
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <div className="w-[75%] mx-auto relative" ref={ref}>
            <motion.div style={{scaleY: scrollYProgress }} className='absolute top-0 left-9 w-[4px] bg-dark h-full origin-top'></motion.div>
            <ul className='w-full flex flex-col justify-between items-start ml-4'>
                <Details positon="Software Engineer" company="Google" time="2022-Present" companyLink="http://www.google.com"
                address="Mountain View, CA"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />

                 <Details positon="Software Engineer" company="Google" time="2022-Present" companyLink="http://www.google.com"
                address="Mountain View, CA"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />

                 <Details positon="Software Engineer" company="Google" time="2022-Present" companyLink="http://www.google.com"
                address="Mountain View, CA"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />

                 <Details positon="Software Engineer" company="Google" time="2022-Present" companyLink="http://www.google.com"
                address="Mountain View, CA"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />

                 <Details positon="Software Engineer" company="Google" time="2022-Present" companyLink="http://www.google.com"
                address="Mountain View, CA"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization." />
            </ul>
        </div>
    </div>
  )
}

export default Experience