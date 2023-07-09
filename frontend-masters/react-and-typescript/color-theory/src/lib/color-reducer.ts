import { rgb } from 'color-convert';

type ColorState = {
  hexColor: string;
};

export const initialColorState: ColorState = {
  hexColor: '#BADA55',
};

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgbColor: [r: number, g: number, b: number];
  };
};

export const colorReducer = (
  state: ColorState = initialColorState,
  action: UpdateHexColorAction | UpdateRGBColorAction,
) => {
  switch (action.type) {
    case 'update-hex-color':
      return { ...state, hexColor: action.payload.hexColor };
    case 'update-rgb-color':
      return { ...state, hexColor: rgb.hex(action.payload.rgbColor) };
    default:
      return state;
  }
};
