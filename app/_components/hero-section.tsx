import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <section className='pt-16 min-h-screen overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative'>
        <div className='flex flex-col items-center justify-center py-20 relative'>
          <span className='px-4 py-2 bg-malachite-500/10 text-malachite-400 rounded-full text-sm font-medium inline-block'>
            Write Better, Faster
          </span>
          <h1 className='text-3xl md:text-5xl lg:text-7xl  font-montserrat bg-gradient-to-r from-malachite-100 to-malachite-700 text-transparent bg-clip-text leading-tight tracking-tight'>
            Write Better with WriteX
          </h1>

          <p className='text-sm text-center text-gray-400 leading-relaxed mt-6'>
            Write SEO optimized content with WriteX. WriteX is a free,
            open-source, and easy-to-use tool that helps you write better,
            faster, and more efficiently with the help of AI. With WriteX, you
            can easily create and edit content, and publish your work on your
            website or blog.
          </p>

          <div className='flexflex-col sm:flex-row gap-6 space-x-8 mt-6'>
            <Link href='/auth/signup'>
              <Button className='text-malachite-200'>
                Get Started Now
                <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400 pt-4'>
          <div className='flex items-center gap-3'>
            <div className='w-5 h-5 bg-gradient-to-r from-malachite-500 to-malachite-900 rounded-full flex items-center justify-center'>
              <svg
                className='w-3 h-3 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                id='el-3z33ysrh'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                  id='el-b2b0b8ld'
                ></path>
              </svg>
            </div>
            <span className='text-xm'>Free Trial</span>
          </div>

          <div className='flex items-center gap-3'>
            <div className='w-5 h-5 bg-gradient-to-r from-malachite-500 to-malachite-900 rounded-full flex items-center justify-center'>
              <svg
                className='w-3 h-3 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                id='el-3z33ysrh'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                  id='el-b2b0b8ld'
                ></path>
              </svg>
            </div>
            <span className='text-xm'>Fast Experience</span>
          </div>

          <div className='flex items-center gap-3'>
            <div className='w-5 h-5 bg-gradient-to-r from-malachite-500 to-malachite-900 rounded-full flex items-center justify-center'>
              <svg
                className='w-3 h-3 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                id='el-3z33ysrh'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                  id='el-b2b0b8ld'
                ></path>
              </svg>
            </div>
            <span className='text-xm'>Better Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
