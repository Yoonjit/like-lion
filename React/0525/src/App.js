// 배열 두 개를 만든 후 배열의 값을 가진 <h1> 태그를 map 함수를 사용하여 나타내도록 한다.
// 둘 중 하나의 배열만 표시되어 하며, 버튼을 클릭했을 때 계속해서 다른 배열의 h1 태그가 나타나도록 한다.

import { useState } from "react";

function App() {
  const [num, setNumber] = useState(0);

  const arr1 = ["a", "b", "c", "d"];
  const arr2 = ["A", "B", "C", "D"];

  const zero = () => {
    setNumber(0);
  };

  const one = () => {
    setNumber(1);
  };

  return (
    <>
      <button style={{ fontSize: "30px" }} onClick={zero}>
        버튼
      </button>

      {num == 0 ? <h1>지금 상태는 0</h1> : <h1>지금 상태는 1</h1>}

      {arr1.map((item, index) => (
        <>
          <h1 key={index}>{item}</h1>
        </>
      ))}
    </>
  );
}

export default App;
