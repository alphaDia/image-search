import { useState } from "react";
import TextInput from "./TextInput.js";
import Container from "./Container";
import styled from "styled-components";


const FormContainer = styled(Container)`
  margin-top: 10px;
  background: white;
  padding: 20px 10px 20px;
  box-shadow: -2px 16px 14px 0px rgba(0, 0, 0, 0.26);
`;

const Form = ({ onsubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (ev) => {
    setQuery(ev.target.value);
  };

  const onFormsubmit = (ev) => {
    ev.preventDefault();
    onsubmit(query);
  };

  return (
    <FormContainer className="form-container">
      <form onSubmit={onFormsubmit}>
        <TextInput change={handleInputChange} value={query} />
      </form>
    </FormContainer>
  );
};

export default Form;
