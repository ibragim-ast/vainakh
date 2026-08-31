import { createContext, useContext, useState } from "react";

export interface IA11yContext {
  isA11yMode: boolean;
  toggleA11yMode: () => void;
}

export const A11yContext = createContext<IA11yContext | undefined>(undefined);

export function A11yProvider({ children }: { children: React.ReactNode }) {
  const [isA11yMode, setIsA11yMode] = useState(false);

  const toggleA11yMode = () => {
    setIsA11yMode(!isA11yMode);
  };

  return (
    <A11yContext.Provider value={{ isA11yMode, toggleA11yMode }}>
      {children}
    </A11yContext.Provider>
  );
}

export const useA11y = () => {
  const context = useContext(A11yContext);

  if (context === undefined) {
    throw new Error("useA11y должен использоваться строго внутри A11yProvider");
  }

  return context;
};
