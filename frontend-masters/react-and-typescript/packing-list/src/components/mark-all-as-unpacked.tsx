import { useContext } from 'react';
import { ItemsContext } from '../context';

const MarkAllAsUnpacked = () => {
  const { markAllAsUnpacked } = useContext(ItemsContext);

  return (
    <div className="mb-16">
      <button className="w-full" onClick={markAllAsUnpacked}>
        🏠 Mark All As Unpacked
      </button>
    </div>
  );
};

export default MarkAllAsUnpacked;
