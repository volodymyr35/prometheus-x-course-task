import { createContext, useContext } from "react";

const AppContext = createContext(null);

export const mockAppContextValue = {
  cartData: [],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: jest.fn(),
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within AppContextProvider!");
  }

  return context;
};

const MockAppContextProvider = ({ children }) => (
  <AppContext.Provider value={mockAppContextValue}>
    {children}
  </AppContext.Provider>
);

export default MockAppContextProvider;
