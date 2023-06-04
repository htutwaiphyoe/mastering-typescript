import { useState } from 'react';
import ControlPanel from './controls';
import NameBadge from './name-badge';

const Application = () => {
  const [name, setName] = useState('');
  return (
    <main className="application">
      <NameBadge name={name} />
      <ControlPanel
        name={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </main>
  );
};

export default Application;
