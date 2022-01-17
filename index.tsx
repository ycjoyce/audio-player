import PlayerWithTheme from "./src/components/PlayerWithTheme/PlayerWithTheme";
import useTracks from "./src/hooks/useTracks";
import useModes from "./src/hooks/useModes";

const renderApp = async (): Promise<void> => {
  const React = await import("react");
  const { render } = await import("react-dom");
  const { default: App } = await import("./src/components/App/App");
  render(<App />, document.querySelector("#root"));
};

renderApp();

export default PlayerWithTheme;
export { useTracks, useModes };
