import { nanoid } from "nanoid";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const defaultList = JSON.parse(localStorage.getItem("reminder")) || [];
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(defaultList);
  const setLocalStorage = (items) => {
    localStorage.setItem("reminder", JSON.stringify(items));
  };

  const addItem = (itemName) => {
    const newItem = {
      completed: false,
      id: nanoid(),
      name: itemName,
    };
    const newItems = [newItem, ...items];
    setItems(newItems);
    setLocalStorage(newItems);
    setNewItem("");
    toast.success("item added to the list");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  return (
    <AppContext.Provider
      value={{
        newItem,
        setNewItem,
        items,
        setItems,
        addItem,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
