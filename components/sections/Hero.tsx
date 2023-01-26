import Link from 'next/link';
import { useState, useEffect } from 'react'; 
import Image from 'next/image'



export const Hero = ()=> {



    

    return (

        <>
        <div className='flex items-center sm:flex-col md:flex-row 2xl:w-[1440px]  md:py-2 xl:px-24 lg:px-12 sm:p-8'>
            <div className='sm:mb-8 lg:mb-0'>
                <h2 className="text-4xl sm:my-6">Manage Your Subscriptions & Contribute Towards Net-zero.</h2>
                <p className="text-lg mt-4 mb-8">With chimp tracker, you can automatically cancel or pause your subscriptions and free trials while making our planet liveable for the future.</p>
                <Link  href="/" legacyBehavior>
                <a className="px-8 py-4 bg-primary text-white">Get Early Access</a>
                </Link>
            </div>

            <div>
                <Image alt="hero-imag" src="/hero.png" height={200} width={200}/>
            </div>
        </div>
        
        </>
    )

}