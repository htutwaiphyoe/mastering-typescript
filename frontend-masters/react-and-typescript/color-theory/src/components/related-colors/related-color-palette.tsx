import { useContext } from 'react';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { ColorContext } from '../../lib/color-context';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
};

const RelatedColorPalette = ({
  title,
  hexColors,
}: RelatedColorPaletteProps) => {
  const { dispatchColorState } = useContext(ColorContext);

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
