import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {

  return (
    <>
      <nav className='flex flex-row justify-end items-center h-16 w-full sm:w-1/2'>
        <div>
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
