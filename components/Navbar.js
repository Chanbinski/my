import Link from 'next/link';

export const Navbar = () => {

  return (
    <>
      <div className='flex flex-row justify-end items-center w-full sm:w-1/2 space-x-4 p-5'>
        <Link href='/'>
          <a className="text-gray-500">
            Home
          </a>
        </Link>
        <Link href='/blog'>
          <a className="text-gray-500">
            Blog
          </a>
        </Link>
        <Link href='/projects'>
          <a className="text-gray-500">
            Projects
          </a>
        </Link>
      </div>
    </>
  );
};

