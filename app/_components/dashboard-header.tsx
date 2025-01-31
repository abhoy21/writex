import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function DashboardHeader(): React.JSX.Element {
  return (
    <div className='p-2 border-b border-supernova-900/45 shadow-sm shadow-supernova-900/45 flex items-center justify-between'>
      <div className='flex items-center gap-2 p-2  rounded-lg w-1/2'>
        <Search className='text-supernova-500' />
        <Input
          placeholder='Search...'
          type='text'
          className='outline-none border-none bg-transparent focus-visible:ring-0 text-supernova-300 placeholder-supernova-500 focus:ring-0 focus:border-none'
        />
      </div>
      <div className='p-2'>
        <h2 className='bg-gradient-to-br from-supernova-500 to-supernova-900 p-2 text-supernova-100 rounded-lg text-sm font-semibold'>
          Join the community today! 🚀
        </h2>
      </div>
    </div>
  );
}
