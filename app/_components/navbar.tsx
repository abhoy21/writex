import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className='sticky top-2 left-0 right-0 z-50 max-w-5xl mx-auto sm:px-4 lg:px-8 border border-malachite-900 bg-neutral-900/10 backdrop-blur-md rounded-2xl'>
      <div className='flex h-16 items-center justify-between '>
        <Logo />

        <div className='hidden md:flex items-center space-x-8 '>
          <Link
            className='text-sm text-gray-500 duration-300 ease-in-out hover:text-malachite-600'
            href='/home'
          >
            Features
          </Link>
          <Link
            className='text-sm text-gray-500 duration-300 ease-in-out hover:text-malachite-600'
            href='/home'
          >
            Solutions
          </Link>
          <Link
            className='text-sm text-gray-500 duration-300 ease-in-out hover:text-malachite-600'
            href='/home'
          >
            Pricing
          </Link>
          <Link
            className='text-sm text-gray-500 duration-300 ease-in-out hover:text-malachite-600'
            href='/home'
          >
            About
          </Link>
        </div>

        <div className='flex items-center gap-4'>
          <Link href='/auth/signin'>
            <Button variant='outline'>Login</Button>
          </Link>
          <Link href='/auth/signin'>
            <Button className='text-malachite-200'>Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
