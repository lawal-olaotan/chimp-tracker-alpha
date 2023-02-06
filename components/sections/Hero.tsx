import Link from 'next/link';
import { useState, useEffect } from 'react'; 
import Image from 'next/image'



export const Hero = ()=> {



    

    return (

        <>
        <div className='flex items-center sm:flex-col md:flex-row lg:py-8 lg:px-0 layout sm:py-6 relative'>

            <div className='sm:mb-24 lg:mb-0 sm:w-full md:w-7/12 lg:w-[55%] xl:w-5/12
             lg:mr-4 xl:mr-24'>
                <h2 className="text-4xl sm:my-6">Manage Your Subscriptions & Contribute Towards Net-zero.</h2>
                <p className="text-lg mt-4 mb-8">With chimp tracker, you can automatically cancel or pause your subscriptions and free trials while making our planet liveable for the future.</p>
                <Link  href="/" legacyBehavior>
                <a className="px-8 py-4 bg-primary text-white">Get Early Access</a>
                </Link>
            </div>

            <div className=' sm:relative md:absolute lg:relative lg:left-0 md:left-[27.7pc] sm:w-[500px] sm:h-[500px] md:w-[400px] md:h-[400px] '>
                <Image alt="hero-imag" src="/hero.png" fill={true}/>
            </div>
        </div>
        
        </>
    )

}