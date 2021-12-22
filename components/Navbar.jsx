import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-row items-center flex-wrap p-3 w-full sm:w-3/5'>
        <button
          className='inline-flex p-3 rounded lg:hidden text-gray ml-auto outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-1 rounded text-gray-500 items-center justify-center'>
                Home
              </a>
            </Link>
            <Link href='/blog'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-1 rounded text-gray-500 items-center justify-center'>
                Blog
              </a>
            </Link>
            <Link href='/projects'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-1 rounded text-gray-500 items-center justify-center'>
                Projects
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
