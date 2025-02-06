import { createContext } from "react";

export interface UpdateCreditUsageContextType {
  updateCreditUsage: any;
  setUpdateCreditUsage: React.Dispatch<React.SetStateAction<any>>;
}

export const UpdateCreditUsageContext =
  createContext<UpdateCreditUsageContextType>({
    updateCreditUsage: null,
    setUpdateCreditUsage: () => {},
  });
