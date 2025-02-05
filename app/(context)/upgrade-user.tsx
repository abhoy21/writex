import { UpgradeUserContextType } from "@/types/type";
import { createContext } from "react";

export const UpgradeUserContext = createContext<UpgradeUserContextType>({
  upgradeUser: false,
  setUpgradeUser: () => {},
});
