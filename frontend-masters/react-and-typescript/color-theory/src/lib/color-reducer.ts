import { rgb } from 'color-convert';

export const initialColorState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialColorState,
  action: UpdateColorActions,
) => {
  switch (action.type) {
    case 'update-hex-color':
      return { ...state, hexColor: action.payload.hexColor };
    case 'update-rgb-color':
      return { ...state, hexColor: `#${rgb.hex(action.payload.rgbColor)}` };
    default:
      return state;
  }
};
