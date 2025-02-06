import { createContext } from "react";

export interface UpgradeUserContextType {
  upgradeUser: boolean;
  setUpgradeUser: (value: boolean) => void;
}

export const UpgradeUserContext = createContext<UpgradeUserContextType>({
  upgradeUser: false,
  setUpgradeUser: () => {},
});
