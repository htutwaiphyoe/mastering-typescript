import SavedColors from './saved-colors';
import RelatedColors from './related-colors';
import AdjustColors from './adjust-colors';
import ColorPicker from './color-picker';
import { useColorContext } from '../lib/color-context';

const Application = () => {
  const { colorState, dispatchColorState } = useColorContext();

  return (
    <div className="grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 mx-auto dark:bg-slate-900 dark:text-white sm:grid-cols-2">
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
