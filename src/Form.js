import styled from "styled-components";
import { useGlobalContext } from "./context";

const Form = () => {
  const { newItem, setNewItem, addItem } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">Add</button>
    </Wrapper>
  );
};
const Wrapper = styled.form`
  text-align: center;
  margin: 2rem 1rem;

  display: grid;
  grid-template-columns: 1fr auto;
  input {
    padding: 1rem;
    font-size: 20px;
    color: red;

    font-weight: 700;
  }
  button {
    width: 10rem;
    background-color: pink;
    color: red;
    font-size: 20px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    input {
      width: 12rem;
    }
    button {
      width: 7rem;
    }
  }
`;
export default Form;
