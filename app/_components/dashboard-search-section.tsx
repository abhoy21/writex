import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function DashboardSearchSection(): React.JSX.Element {
  return (
    <div className='p-10 bg-gradient-to-br from-neutral-950 via-malachite-950 to-neutral-950 flex flex-col items-center justify-center text-malachite-200 rounded-xl '>
      <h1 className='text-3xl font-montserrat'>Browse Templates</h1>
      <p className='text-malachite-500 mt-2'>
        Start writing amazing content faster with our templates
      </p>
      <div className='w-full flex items-center justify-center'>
        <div className='flex items-center gap-2 p-2  rounded-lg bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 my-4 w-[45%]'>
          <Search className='text-malachite-500' />
          <Input
            placeholder='Search...'
            type='text'
            className='outline-none border-none bg-transparent focus-visible:ring-0 text-malachite-300 placeholder-malachite-500 focus:ring-0 focus:border-none'
          />
        </div>
      </div>
    </div>
  );
}
