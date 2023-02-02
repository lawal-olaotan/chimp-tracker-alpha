import Link from 'next/link';
import { NextPage } from 'next'; 
import { useRouter } from 'next/router';

interface Props{
    routeName:string;
    routeLink:string;
}

export const NavItems:NextPage<Props> = (Props) => {
    const {routeName,routeLink} = Props
    const router = useRouter();
    return (
        <Link href={routeLink} legacyBehavior><a className={`${router.pathname == routeLink ? "bg-primary text-white": 'bg-transparent'} px-6 py-2 hover:bg-primary hover:text-white mr-2 sm:mb-8 lg:mb-0 sm:font-bold md:font-normal`}> 
        <span className='mb-0'>{routeName}</span>
        </a></Link>

    )
}