import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='font-medium text-lg border-t-2 border-dark'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
         Learn From Youtube Channel <span className="text-primary text-3xl px-1">&#9825;</span>
         <Link href="https://devdreaming.com" className='underline underline-offset-2' target={'_blank'}>Code Bucks</Link>
        </div>
        <Link  href="https://devdreaming.com" className='underline underline-offset-2' target={'_blank'}>Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer