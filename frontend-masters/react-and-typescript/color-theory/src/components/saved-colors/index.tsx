import { useContext, useState } from 'react';
import id from 'lodash.uniqueid';
import AddSavedColor from './add-saved-color';
import SavedColor from './saved-color';
import { ColorContext } from '../../lib/color-context';

type SavedColorsProps = {
  hexColor: string;
};

const saved = [
  { id: id(), name: '1989 Miami Hotline', hexColor: '#dd3366' },
  { id: id(), name: 'Blue Fire', hexColor: '#00aadd' },
];

const SavedColors = ({ hexColor }: SavedColorsProps) => {
  const [savedColors, setSavedColors] = useState(saved);
  const { dispatchColorState } = useContext(ColorContext);

  return (
    <section className="flex w-full flex-col gap-4 sm:col-span-2">
      <h3>Save Color</h3>
      <AddSavedColor
        onSave={(name) =>
          setSavedColors((colors) => [...colors, { id: id(), name, hexColor }])
        }
      />
      {savedColors.map(({ id, name, hexColor }) => {
        return (
          <SavedColor
            key={id}
            name={name}
            hexColor={hexColor}
            onClick={() =>
              dispatchColorState({
                type: 'update-hex-color',
                payload: { hexColor },
              })
            }
            onRemove={() =>
              setSavedColors((colors) =>
                colors.filter((color) => color.id !== id),
              )
            }
          />
        );
      })}
    </section>
  );
};

export default SavedColors;
