import React from "react";

function App(): JSX.Element {
  return (
    <div className="app" data-testid="container">
      Hello
    </div>
  );
}

export const sum = (...nums: number[]): number =>
  nums.reduce((a, e) => {
    let ac = a;
    ac += e;
    return ac;
  }, 0);

export default App;
