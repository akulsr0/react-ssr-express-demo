import { createElement, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const mainChildren = [
    createElement("h1", null, "Welcome to React SSR! "),

    createElement("p", null, `Count: ${count}`),

    createElement(
      "button",
      { onClick: () => setCount(count + 1) },
      "Increment"
    ),

    createElement(
      "button",
      { onClick: () => setCount(count - 1) },
      "Decrement"
    ),
  ];

  return createElement("main", null, mainChildren);
}

export default App;
