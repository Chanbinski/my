import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-row justify-end items-center p-3 h-16 w-full sm:w-1/2'>
        <div className=''>
          <Link href='/'>
            <a className='mr-5 text-gray-500'>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className='mr-5 text-gray-500'>
              Blog
            </a>
          </Link>
          <Link href='/projects'>
            <a className='mr-5 text-gray-500'>
              Projects
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};
