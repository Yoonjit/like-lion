// App.js

import { useState } from "react";

function App() {
  const [num, setNumber] = useState(0);

  const plus = () => {
    setNumber((prev) => prev + 1);
  };

  const minus = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <>
      <h1>{num >= 5 ? "5 이상" : "5 이하"}</h1>
      {num >= 5 ? <h1>5 이상</h1> : <h1>5 이하</h1>}
      <h2>num 변수 : {num}</h2>
      <button style={{ fontSize: "30px" }} onClick={plus}>
        +
      </button>
      <button style={{ fontSize: "30px" }} onClick={minus}>
        -
      </button>
    </>
  );
}

export default App;
