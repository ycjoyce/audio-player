import Player from "./src/components/Player/Player";
import tracksHook from "./src/hooks/useTracks";
import modesHook from "./src/hooks/useModes";

const renderApp = async (): Promise<any> => {
  const React = await import("react");
  const { render } = await import("react-dom");
  const { default: App } = await import("./src/components/App/App");
  render(<App />, document.querySelector("#root"));
};

if (process.env.NODE_ENV === "development") {
  renderApp();
}

export default Player;
export const useTracks = tracksHook;
export const useModes = modesHook;
