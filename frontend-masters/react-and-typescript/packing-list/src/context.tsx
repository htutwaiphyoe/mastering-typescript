import { useState, createContext, PropsWithChildren } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from './lib/items';

export const ItemsContext = createContext({} as ItemsContextState);

const ItemsProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>(getInitialItems());
  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  const add = (name: string) => {
    const item = createItem(name);
    setItems([...items, item]);
  };

  const update = (id: string, updates: WithoutIdPartialItem) => {
    setItems(updateItem(items, id, updates));
  };

  const remove = (id: string) => {
    setItems(removeItem(items, id));
  };

  const markAllAsUnpacked = () => {
    return setItems(items.map((item) => ({ ...item, packed: false })));
  };

  const itemContextValue = {
    items,
    unpackedItems,
    packedItems,
    add,
    update,
    remove,
    markAllAsUnpacked,
  };

  return (
    <ItemsContext.Provider value={itemContextValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
