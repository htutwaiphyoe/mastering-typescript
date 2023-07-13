import { Dispatch, PropsWithChildren, useReducer } from 'react';
import { colorReducer, initialColorState } from './color-reducer';
import { createContext } from './create-context';

type ColorContextType = {
  colorState: ColorState;
  dispatchColorState: Dispatch<UpdateColorActions>;
};

const [useContext, ContextProvider] = createContext<ColorContextType>();

export const useColorContext = useContext;

export const ColorContextProvider = ({ children }: PropsWithChildren) => {
  const [colorState, dispatchColorState] = useReducer(
    colorReducer,
    initialColorState,
  );

  return (
    <ContextProvider value={{ colorState, dispatchColorState }}>
      {children}
    </ContextProvider>
  );
};
