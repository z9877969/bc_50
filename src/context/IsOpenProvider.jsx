import { createContext, useContext, useState } from "react";

const IsOpenValueContext = createContext();
const IsOpenMethodContext = createContext();

export const useIsOpen = () => useContext(IsOpenValueContext);
export const useSetIsOpen = () => useContext(IsOpenMethodContext);

// console.log("IsOpenContext :>> ", IsOpenContext);

export const IsOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // ref1 | ref1

  return (
    <IsOpenValueContext.Provider value={isOpen}>
      <IsOpenMethodContext.Provider value={setIsOpen}>
        {children}
      </IsOpenMethodContext.Provider>
    </IsOpenValueContext.Provider>
  );
};
