import Link from 'next/link';

export const Navbar = () => {

  return (
    <>
      <div className='flex flex-row justify-center items-center w-full sm:w-1/2'>
        <div>
          <Link href='/'>
            <a className='pr-5 text-gray-500'>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className='pr-5 text-gray-500'>
              Blog
            </a>
          </Link>
          <Link href='/projects'>
            <a className='pr-5 text-gray-500'>
              Projects
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

