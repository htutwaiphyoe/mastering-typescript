import { useState, createContext, PropsWithChildren } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from './lib/items';

type ItemsContextState = {
  items: Item[];
  unpackedItems: Item[];
  packedItems: Item[];
  add: (name: string) => void;
  update: (id: string, updates: any) => void;
  remove: (id: string) => void;
  markAllAsUnpacked: () => void;
};

export const ItemsContext = createContext({} as ItemsContextState);

const ItemsProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>(getInitialItems());

  const add = (name: string) => {
    const item = createItem(name);
    setItems([...items, item]);
  };

  const update = (id: string, updates: any) => {
    setItems(updateItem(items, id, updates));
  };

  const remove = (id: string) => {
    setItems(removeItem(items, id));
  };

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

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
