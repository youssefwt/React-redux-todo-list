import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${({ width }) => width};
  font-size: 1em;
  color: ${({ color }) => color};
  text-align: center;
  padding: 0.5em;
  border-color: ${({ bg }) => bg};
  border-radius: 0.5em;
  background-color: ${({ bg }) => bg};
  cursor: pointer;
  &:hover {
    transform: scale(0.93);
  }
  &:disabled {
    background-color: lightgray;
    border-color: lightgray;
    cursor: default;
    &:hover {
      transform: scale(1);
    }
  }
`;

const ButtonComponent = (props) => {
  props.status && console.log("satus: ", props.status);

  return (
    <ButtonStyled {...props} onClick={props.handleClick}>
      {props.children}
    </ButtonStyled>
  );
};

export default ButtonComponent;
