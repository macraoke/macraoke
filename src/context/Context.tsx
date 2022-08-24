import React from "react";
import VideosJson from "../assets/videos.json";

interface IVideos {
  id: string;
}

const Videos: IVideos[] = VideosJson as IVideos[];

export type State = {
  video: string; // youtube id
};

const getRandomVideo = (exclude?: string): string => {
  const searchFrom = Videos.filter((v) => v.id !== exclude);
  return searchFrom[Math.floor(Math.random() * searchFrom.length)].id;
};

interface GetRandomVideoAction {
  type: "GET_RANDOM_VIDEO_OTHER_THAN_CURRENT";
}

type Action = GetRandomVideoAction;

const initialState: State = {
  video: getRandomVideo(),
};

type ContextType = [state: State, dispatch: React.Dispatch<Action>];

const Context = React.createContext<ContextType>([
  initialState,
  {} as React.Dispatch<Action>,
]);

export const reducer = (state: State, action: Action): State => {
  let newState: State;

  switch (action.type) {
    case "GET_RANDOM_VIDEO_OTHER_THAN_CURRENT":
      newState = {
        ...state,
        video: getRandomVideo(state.video),
      };
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};

export const Provider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Consumer = Context.Consumer;

export default Context;
