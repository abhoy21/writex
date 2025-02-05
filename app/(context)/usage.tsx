import { createContext } from "react";

export const UsageContext = createContext<UsageContextType>({
  creditUsed: 0,
  setCreditused: () => {},
});
