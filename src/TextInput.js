import styled from "styled-components";

const TextInput = styled((props) => (
  <input
    placeholder='ex: programming dancing network'
    className={props.className}
    onChange={props.change}
    value={props.value}
  />
))`
  margin: 0px;
  padding: 15px;
  width: 100%;
  border: none;
  border: 3px solid #e2e8f0;
  border-radius: 5px;
  outline: none;
  font-size: 1.2em;
  display: block;
  color: #64748b;
`;

export default TextInput;
