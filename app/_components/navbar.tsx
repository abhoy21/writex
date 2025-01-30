import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className='sticky top-2 left-0 right-0 z-50 max-w-5xl mx-auto sm:px-4 lg:px-8 border border-malachite-900 bg-neutral-900/10 backdrop-blur-md rounded-2xl'>
      <div className='flex items-center justify-between py-2'>
        <Logo />
        <div className='flex gap-4'>
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
