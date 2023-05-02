import styled from "styled-components";
import Form from "./Form";
import Results from "./Results";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Wrapper>
      <ToastContainer position="top-center" />
      <h2>Shopping list for my beautiful beautiful wifeeeee</h2>
      <Form />
      <Results />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  h2 {
    text-align: center;
    color: pink;
    font-weight: 700;
    font-size: 32px;
  }
`;
export default App;
