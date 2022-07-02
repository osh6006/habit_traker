import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = props => {
  // 함수 컴포넌트에서 스테이트 사용하기
  // state = {
  //   count: 0,
  // };
  // 데이터가 변경되면 함수 전체가 다시 렌더링 된다.
  // useState만 따로 저장되어 있다.

  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // 카운트가 변경될 때마다 호출!
  useEffect(() => {
    console.log(`mounted & updated ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
