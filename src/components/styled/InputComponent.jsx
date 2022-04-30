import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  font-size: 1em;
  width: ${({ width }) => width};
  /* min-width: ${({ minwidth }) => minwidth}; */
  text-align: center;
  padding: 0.5em 0;
  border-color: lightgray;
  border-radius: 0.5em;
`;

const InputComponent = ({ setInput, ...props }) => {
  return (
    <InputStyled
      {...props}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};

export default InputComponent;
