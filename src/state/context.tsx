import React from "react";
import { createContext, useState } from "react";

export interface IComicData {
  [key: number]: {
    prompt: string | null;
    image: string | null;
    speechBubble: string | null;
  };
}

const initialComicData = {
  1: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  2: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  3: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  4: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  5: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  6: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  7: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  8: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  9: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
  10: {
    prompt: null,
    image: null,
    speechBubble: null,
  },
};

export interface IContextProps {
  readonly comicData: IComicData;
  readonly setComicData: (comicData: IComicData) => void;
}

export const AppContext = createContext<IContextProps>({
  comicData: initialComicData,
  setComicData: () => null,
});

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const [comicData, setComicData] = useState<IComicData>(initialComicData);

  const value = {
    comicData,
    setComicData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;