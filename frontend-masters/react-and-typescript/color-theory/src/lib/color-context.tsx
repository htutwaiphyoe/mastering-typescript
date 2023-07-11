import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react';
import { colorReducer, initialColorState } from './color-reducer';

type ColorContextType = {
  colorState: ColorState;
  dispatchColorState: Dispatch<UpdateColorActions>;
};

export const ColorContext = createContext<ColorContextType>({
  colorState: initialColorState,
} as ColorContextType);

export const ColorContextProvider = ({ children }: PropsWithChildren) => {
  const [colorState, dispatchColorState] = useReducer(
    colorReducer,
    initialColorState,
  );

  return (
    <ColorContext.Provider value={{ colorState, dispatchColorState }}>
      {children}
    </ColorContext.Provider>
  );
};
