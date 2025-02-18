import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface DashboardSearchSectionProps {
  setSearchTerm: (searchTerm: string) => void;
}

export default function DashboardSearchSection({
  setSearchTerm,
}: DashboardSearchSectionProps): React.JSX.Element {
  return (
    <div className="p-4 md:p-10 bg-gradient-to-br from-[#181818] via-neutral-950 to-[#181818] flex flex-col items-center justify-center text-supernova-200 rounded-xl shadow-supernova-700/45 shadow-sm">
      <h1 className="text-3xl font-montserrat">Browse Templates</h1>
      <p className="text-supernova-500 mt-2">
        Start writing amazing content faster with our templates
      </p>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 my-4 md:w-[45%] border border-supernova-500/45">
          <Search className="text-supernova-500" />
          <Input
            placeholder="Search..."
            type="text"
            className="outline-none border-none bg-transparent focus-visible:ring-0 text-supernova-300 placeholder-supernova-500 focus:ring-0 focus:border-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
