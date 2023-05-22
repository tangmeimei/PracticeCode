import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

const FeatureProject = ({type, title , summary, img, link ,github}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl relative p-12 rounded-br-2xl">
      <div className='absolute top-0 -right-3 bg-dark w-[100.8%] h-[103%] -z-10 rounded-[2.5rem] rounded-br-3xl' />
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title}   className="w-full h-auto"/>
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'><h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2></Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
          <Link href={link} target="_blank" className='ml-4 p-2 px-6 bg-dark text-light text-lg font-semibold rounded-lg'>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({type, title ,img, link ,github}) => {
    return (
    <article className="w-ful flex items-center justify-center flex-col rounded-2xl border border-solid border-dark bg-light p-6 relative" >
      <div className='absolute top-0 -right-3 bg-dark w-[100.8%] h-[103%] -z-10 rounded-[2.5rem] rounded-br-3xl' />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title}   className="w-full h-auto"/>
      </Link>
      <div className='w-full flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'><h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2></Link>
        <div className='mt-2 flex items-center justify-between w-full'>
          <Link href={link} target="_blank" className='p-2 text-dark text-lg font-semibold rounded-lg w-8'>Visit</Link>
          <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
        </div>
      </div>
    </article>
  )
}
const projects = () => {
  return (
    <>
      <Head>
        <title>Learn From Youtube Channel</title>
        <meta name="description" content="From Youtube Channel CodeBucks" />
      </Head>
      <main className="w-full flex  justify-center items-center mb-16">
        <Layout>
            <AnimatedText  text="Imagination Trumps Knowledge!" className='mb-16'/>
            <div className='grid grid-cols-12 gap-24 gay'>
                 <div className='col-span-12'>
                  <FeatureProject 
                  title="Crypto Screener Application"
                  summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                  type="Featured Project"
                  link="/"
                  github="/"
                  img={project1}
                 /></div>
                 <div className='col-span-6'>
                 <Project 
                  title="Crypto Screener Application"
                  type="Featured Project"
                  link="/"
                  github="/"
                  img={project1}
                 />
                 </div>
                 <div className='col-span-6'>
                 <Project 
                  title="Crypto Screener Application"
                  type="Featured Project"
                  link="/"
                  github="/"
                  img={project1}
                 />
                 </div>

                 <div className='col-span-12'>
                 <FeatureProject 
                  title="Crypto Screener Application"
                  summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                  type="Featured Project"
                  link="/"
                  github="/"
                  img={project1}
                 />
                 </div>
                 <div className='col-span-6'>
                 <Project 
                  title="Crypto Screener Application"
                  type="Featured Project"
                  link="/"
                  github="/"
                  img={project1}
                 />
                 </div>
                 <div className='col-span-6'>
                 <Project 
                  title="Crypto Screener Application"
                  type="Featured Project"
                  link="/"
                  github="/"
                  img={project1}
                 />
                 </div>
            </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
