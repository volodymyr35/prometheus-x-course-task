import { createContext, useContext } from 'react';
import { useState } from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within AppContextProvider!");
  }

  return context;
}

const AppContextProvider = ({ children }) => {
  const [cartData, setCart] = useState([]);

  /**
   * @param {{ id: number, quantity: number, bookPrice: number, bookName: string }} bookData 
   */
  const addToCart = (bookData) => {
    const bookIndex = cartData.findIndex(data => data.id === bookData.id);

    if (bookIndex !== -1) {
      const newData = [...cartData];
      const { quantity: oldQuantity } = newData[bookIndex];
      newData[bookIndex] = {...newData[bookIndex], quantity: oldQuantity + bookData.quantity };

      setCart(newData);
    } else {
      const oldCart = [...cartData];
      const newCart = oldCart.concat(bookData);

      setCart(newCart);
    }
  };

  /**
   * @param {number} id 
   */
  const removeFromCart = (id) => {
    const newCart = cartData.filter((bookData) => bookData.id !== id);

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <AppContext.Provider value={{ cartData, addToCart, removeFromCart, clearCart }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;