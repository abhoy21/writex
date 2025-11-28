import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Auth from "./Auth";
import { DialogTitle } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function LoginButton() {
  return (
    <Dialog>
      {/* <DialogTrigger className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans cursor-pointer"> */}
       <DialogTrigger  className={cn(
                      "rounded-full px-4",
                      "bg-neutral-900 hover:bg-neutral-800 text-white",
                      "shadow-[inset_0_1px_0_0_rgba(255,255,255,.15)] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-4 py-2 rounded-full"
                    )}>
       
      <span className="mr-1">Try WriteX-AI for Free</span>
              <ArrowRight className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Authentication</DialogTitle>
        <Auth />
      </DialogContent>
    </Dialog>
  );
}
