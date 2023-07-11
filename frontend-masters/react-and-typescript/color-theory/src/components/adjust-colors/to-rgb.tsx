import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { useContext } from 'react';
import { ColorContext } from '../../lib/color-context';

type HexToRGBProps = {
  hexColor: string;
};

const HexToRGB = ({ hexColor }: HexToRGBProps) => {
  const { dispatchColorState } = useContext(ColorContext);
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  const updateRGB = ({
    red = r,
    green = g,
    blue = b,
  }: {
    red?: number;
    green?: number;
    blue?: number;
  }) => {
    dispatchColorState({
      type: 'update-rgb-color',
      payload: { rgbColor: [red, green, blue] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        onChange={(e) => updateRGB({ red: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        onChange={(e) => updateRGB({ green: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        onChange={(e) => updateRGB({ blue: e.target.valueAsNumber })}
      />
    </section>
  );
};

export default HexToRGB;
