import React from 'react'
import styled from "styled-components";
import Container from "./Container";

const LoaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: ${(props) => (props.toBottom ? "auto" : "100vh")};
  align-items: center;
`;

const Loader = React.forwardRef((props, ref) => (
  <LoaderContainer toBottom={props.toBottom}>
    <img src="loader.svg" alt="loader" ref={ref} />
  </LoaderContainer>
));

export default Loader;
