import { useReducer } from 'react';
import SavedColors from './saved-colors';
import RelatedColors from './related-colors';
import AdjustColors from './adjust-colors';
import ColorPicker from './color-picker';
import { colorReducer, initialColorState } from '../lib/color-reducer';

const Application = () => {
  const [colorState, dispatchColorState] = useReducer(
    colorReducer,
    initialColorState,
  );

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 dark:bg-slate-900 dark:text-white sm:grid-cols-2">
      <ColorPicker
        hexColor={colorState.hexColor}
        onChange={(e) =>
          dispatchColorState({
            type: 'update-hex-color',
            payload: { hexColor: e.target.value },
          })
        }
      />
      <AdjustColors hexColor={colorState.hexColor} />
      <RelatedColors hexColor={colorState.hexColor} />
      <SavedColors hexColor={colorState.hexColor} />
    </div>
  );
};

export default Application;
