import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function DashboardHeader(): React.JSX.Element {
  return (
    <div className='p-2 border-b border-malachite-900/45 shadow-sm shadow-malachite-900/45 flex items-center justify-between'>
      <div className='flex items-center gap-2 p-2 border rounded-lg w-1/2'>
        <Search className='text-malachite-500' />
        <Input
          placeholder='Search...'
          type='text'
          className='outline-none border-none bg-transparent focus-visible:ring-0 text-malachite-300 placeholder-malachite-500 focus:ring-0 focus:border-none'
        />
      </div>
      <div className='p-2'>
        <h2 className='bg-gradient-to-br from-malachite-500 to-malachite-900 p-2 text-malachite-100 rounded-lg text-sm font-semibold'>
          Join the community today! 🚀
        </h2>
      </div>
    </div>
  );
}
