import { createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';

export const LayoutContext = createContext<{
  showHeader: boolean;
  setShowHeader: (showHeader: boolean) => void;
  showFooter: boolean;
  setShowFooter: (showFooter: boolean) => void;
}>({
  showHeader: true,
  setShowHeader: () => {},
  showFooter: true,
  setShowFooter: () => {},
});

export const LayoutProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [showFooter, setShowFooter] = useState<boolean>(true);

  return (
    <LayoutContext.Provider
      value={{
        showHeader,
        showFooter,
        setShowHeader,
        setShowFooter,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

const useLayout = () => useContext(LayoutContext);

export default useLayout;
