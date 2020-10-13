import { createContext, useCallback, useContext, useState } from "react";
import { ICartItem } from "../models/CartItem";


interface CartContextData {
  items: ICartItem[];
  updateCart(item: ICartItem): void;
  removeItem(item: ICartItem): void;
}

interface CartState {
  items: ICartItem[];
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<CartState>({ items: [] } as CartState);

  const updateCart = useCallback(({ dish, quantity }: ICartItem) => {
    const findItem = data.items.filter(item => item.dish.name === dish.name);
    if (findItem.length) {
      if (quantity === 0) {
        const newItems = data.items.filter(item => item.dish.name !== dish.name);
        setData({ items: newItems });
      } else {
        const newItems: ICartItem[] = data.items.map(item => {
          return item.dish.name === dish.name ? {
            quantity,
            dish
          } : item;
        });
        setData({ items: newItems });
      }
    } else {
      const newItem: ICartItem = { dish, quantity };
      setData({ items: [...data.items, newItem] });
    }
  }, [setData, data]);

  const removeItem = useCallback((item: ICartItem) => {
    const updatedItems = data.items.filter(i => i.dish.name !== item.dish.name);

    setData({ items: updatedItems });
  }, [data, setData]);

  return (
    <CartContext.Provider
      value={{ items: data.items, updateCart, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}