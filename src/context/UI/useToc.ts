import { createContext, useContext } from "react";

export type TocLink = {
  label: string;
  link: string;
  className?: string;
};

type TocContextValue = {
  links: TocLink[];
  setLinks: (links: TocLink[]) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const TocContext = createContext<TocContextValue | null>(null);

export function useToc() {
  const context = useContext(TocContext);

  if (!context) {
    throw new Error("useToc must be used inside TocProvider");
  }

  return context;
}
