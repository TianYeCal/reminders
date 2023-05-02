import { useState } from "react";
import styled from "styled-components";

const Item = ({ id, name, completed, removeItem }) => {
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <Wrapper>
      <div>
        <input
          type="checkbox"
          value={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <span style={{ textDecoration: isChecked && "line-through" }}>
          {name}
        </span>
      </div>
      <button type="button" onClick={() => removeItem(id)}>
        delete
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 60vw;
  font-size: 20px;
  span {
    color: pink;
    font-weight: 700;
  }
  button {
    width: 10rem;
    background-color: pink;
    color: red;
    font-size: 20px;
    font-weight: 700;
    border: 2px solid #333;
  }
`;

export default Item;
