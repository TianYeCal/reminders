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
  max-width: 80vw;
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 1rem;

  input {
    padding: 1rem;
    font-size: 20px;
    color: red;

    font-weight: 700;
  }
  button {
    background-color: pink;
    color: red;
    font-size: 20px;
    font-weight: 700;
    padding: 1rem;
  }
`;
export default Form;
