import { UpdateCreditUsageContextType } from "@/types/type";
import { createContext } from "react";

export const UpdateCreditUsageContext =
  createContext<UpdateCreditUsageContextType>({
    updateCreditUsage: null,
    setUpdateCreditUsage: () => {},
  });
