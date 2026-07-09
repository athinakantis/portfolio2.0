import { useState } from "react";
import { TocContext, type TocLink } from "./useToc";

export function TocProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<TocLink[]>([]);
  const [visible, setVisible] = useState(false);

  return (
    <TocContext.Provider value={{ links, setLinks, visible, setVisible }}>
      {children}
    </TocContext.Provider>
  );
}
