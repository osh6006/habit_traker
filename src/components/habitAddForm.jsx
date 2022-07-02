import React, { memo } from "react";

// Memo는 클래스컴포넌트의 PureComponent역할을 한다!!

const HabitAddForm = memo(props => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
  };
  return (
    <>
      {/* 사용자가 add버튼을 누르게 되면 */}
      <form className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">add</button>
      </form>
    </>
  );
});

export default HabitAddForm;
