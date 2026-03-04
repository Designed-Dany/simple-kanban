import React from "react";
import "../scss/components/task.scss";

function Task() {
  const [flag, setFlag] = React.useState(true);
  const [inputValue, setInputValue] = React.useState("");
  const [itemsArray, setItemsArray] = React.useState([]);

  const hiddenInput = () => {
    setFlag(!flag);
  };

  const handleBlur = () => {
    if (inputValue.trim() !== "") {
      setItemsArray((prevArray) => [...prevArray, inputValue]);
      setInputValue("");
      setFlag(true);
    }
  };

  return (
    <>
      <ul className="status">
        <li className="status__li">Not started</li>
        <li className="status__li progress">In progress</li>
        <li className="status__li blocked">Blocked</li>
        <li className="status__li done">Done</li>
      </ul>
      <div className="task">
        <button onClick={hiddenInput} className="task__button">
          {" "}
          <img
            width={15}
            src="../../src/assets/add-task.png"
            alt="icon-plus"
          />{" "}
          Добавить задачу
        </button>
        <input
          hidden={flag}
          value={inputValue}
          onBlur={handleBlur}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Напишите название"
        />
        <ul>
          {itemsArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Task;
