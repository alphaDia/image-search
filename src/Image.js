import styled from "styled-components";


const Image = styled((props) => {
  return <img src={props.src} alt={props.alt_description} className={props.className}/>;
})`
  flex: 100%;
  width: 100%;
  height: auto;
  border-radius: 10px;
  &:hover {opacity: .5}
`;

export default Image;
