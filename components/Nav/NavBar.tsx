
   import Link from 'next/link';
   import { NavItems } from './Navitems';
   import { useState, useEffect } from 'react'; 
   import Image from 'next/image'
   import { useRouter } from 'next/router';
   


export const NavBar = ()=> {

    const [active, setActive] = useState(false);
    const router = useRouter()

    const handleButton = () => {
        setActive(!active);
    }

    useEffect(() =>{
        if(router.pathname !== '/'){
            handleButton() 
        }
             
    },[router.asPath])

 


    return (
        <>
        <nav className=" w-100 bg-white text-primary sticky top-0 left-0 z-10 sm:shadow-sm md:none">
            <div className='2xl:w-[1440px]  md:py-2 xl:px-24 lg:px-12 sm:p-8 m-auto flex items-center justify-between'>

            <Link  href="/" legacyBehavior>
                <a className="inline-flex sm:h-[60px] md:h-[80px] relative sm:w-[180px] md:w-[240px]"> 
                        <Image  object-fit="contain" fill={true} src="/logo.png" alt="logo" />
                </a>
            </Link>

            <div className= { `${active? 'flex' : 'hidden'} z-0 lg:flex 2xl:w-3/5 xl:w-3/5 lg:w-8/12 lg:justify-between lg:flex-row  lg:p-0 lg:h-auto lg:bg-transparent lg:relative lg:text-base text-primary leading-none sm:absolute sm:flex-col sm:w-full sm:top-0 sm:left-0 sm:pt-20 sm:bg-white sm:h-screen md:items-center sm:flex-start sm:text-2xl sm:z-10`}   >

            <button className=" lg:hidden absolute top-10 right-6" onClick={handleButton}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

                <NavItems routeName="Features" routeLink="/" />
                <NavItems routeName="Deals" routeLink="/deals" />
                <NavItems routeName="Our Story" routeLink="/about"/>
                <NavItems routeName="Contact Us" routeLink="/contact"/>
                
                <Link href="/" legacyBehavior><a className="bg-transparent text-primary  px-4 py-2  border-2 border-primary sm:mt-32 lg:mt-0 sm:mx-auto md:mx-0">Get Early Access</a></Link>
            </div>
            
                <button className="lg:hidden inline-flex outline-none" onClick={handleButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu text-white"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
            


        </nav>


        </>
        
    )
}