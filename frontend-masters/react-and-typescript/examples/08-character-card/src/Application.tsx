import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

const Application = () => {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <main>
      {character ? <CharacterInformation character={character} /> : <Loading />}
    </main>
  );
};

export default Application;
