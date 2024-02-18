import Link from 'next/link';
import styles from './homestyles.module.css';

import localFont from 'next/font/local'
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../public/Gerbil.otf',
  display: 'swap',
})

export default function Home() {
  return (
    <>
    <Nav />
    <main className={`${styles.main_wrapper} h-screen flex flex-col items-center justify-center -mt-16`}>
      <h1 className={`${styles.logo} ${myFont.className} text-purple-600`}>Templatune</h1>
      <p>The new way to automagically generate GDSC Posters for your GDSC events</p>

      <div className={`flex items-center justify-between mt-10`}>
      <button type="button" className="text-black hover:bg-purple-200 hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Link href="/about">Learn more</Link>
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
      <button type="button" className="text-white bg-purple-600 hover:bg-purple-200 hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <Link href="/create">Create Poster</Link>
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
      </div>

      <Footer />
    </main>
    </>
  );
}
