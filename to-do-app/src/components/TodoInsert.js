import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
import { useCallback, useState } from "react";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      // submit 이벤트는 브라우저에서 새로고침을 발생시킴
      // 이를 방지하기 위한 함수 호출
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
