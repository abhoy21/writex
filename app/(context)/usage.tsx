import { createContext } from "react";

export interface UsageContextType {
  creditUsed: number;
  setCreditused: (value: number) => void;
}

export const UsageContext = createContext<UsageContextType>({
  creditUsed: 0,
  setCreditused: () => {},
});
