type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type Item = {
  id: string;
  name: string;
  packed: boolean;
};

type PartialItem = Partial<Item>;

type WithoutIdPartialItem = Omit<PartialItem, 'id'>;

type ItemsContextState = {
  items: Item[];
  unpackedItems: Item[];
  packedItems: Item[];
  add: (name: string) => void;
  update: (id: string, updates: WithoutIdPartialItem) => void;
  remove: (id: string) => void;
  markAllAsUnpacked: () => void;
};
