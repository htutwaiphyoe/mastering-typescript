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

type UpdateColorActions = UpdateHexColorAction | UpdateRGBColorAction;

type ColorState = {
  hexColor: string;
};
