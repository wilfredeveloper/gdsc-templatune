import Link from 'next/link';
import Image from 'next/image';
import styles from './Nav.module.css';

export default function Nav() {
    return(
        <nav className={`flex items-center justify-between pt-20 px-60`}>
            <div>
                <label className="inline-flex items-center cursor-pointer">
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 me-3">
                        <Image src="/Darkmode.svg" alt="logo" width={25} height={25} />
                    </span>
                    <input type="checkbox" value="" className="sr-only peer"></input>
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <Image src="/Daymode.svg" alt="logo" width={25} height={25} />
                    </span>
                </label>
            </div>
            <div className={`flex justify-between items-center`}>
                <Link href="/contact" className={`flex items-center justify-between`}>
                    Contact Us
                    <Image className={`ms-3`} src="/up-right-arrow.svg" alt="logo" width={12} height={12} />
                </Link>

                <Image className={`mx-20`} src="/Templatune.svg" alt="logo" width={200} height={200} />
                
                <Link href="/github" className={`flex items-center justify-between`}>
                    <Image className={`me-3`} src="/github-octocat.svg" alt="logo" width={14} height={14} />
                    Star on github
                    <Image className={`ms-3`} src="/up-right-arrow.svg" alt="logo" width={12} height={12} />
                </Link>
            </div>
            <div>
            <button type="button" className="text-white bg-purple-600 hover:bg-purple-200 hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create Account
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            
            </div>
        </nav>
    )
}