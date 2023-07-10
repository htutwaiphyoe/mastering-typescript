import { Dispatch } from 'react';
import ColorChangeSwatch from '../shared/color-change-swatch';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  dispatchColorState: Dispatch<UpdateColorActions>;
};

const RelatedColorPalette = ({
  title,
  hexColors,
  dispatchColorState,
}: RelatedColorPaletteProps) => {
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="h-full w-full"
              onClick={() =>
                dispatchColorState({
                  type: 'update-hex-color',
                  payload: { hexColor },
                })
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
