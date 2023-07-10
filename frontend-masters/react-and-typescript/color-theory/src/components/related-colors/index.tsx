import { Dispatch } from 'react';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

type RelatedColorsProps = {
  hexColor: string;
  dispatchColorState: Dispatch<UpdateColorActions>;
};

const RelatedColors = ({
  hexColor,
  dispatchColorState,
}: RelatedColorsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette
        title="Triad Colors"
        hexColors={triadColors}
        dispatchColorState={dispatchColorState}
      />
      <RelatedColorPalette
        title="Complimentary Colors"
        hexColors={complementColors}
        dispatchColorState={dispatchColorState}
      />
    </>
  );
};

export default RelatedColors;
