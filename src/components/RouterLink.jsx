import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 1rem;
`;

const Alink = styled.button`
  background-color: #faebe6;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    transform: scale(0.93);
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
    transform: scale(1.1);
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const RouterLink = (props) => {
  return (
    <Container>
      <Alink {...props}>{props.children}</Alink>
    </Container>
  );
};

export default RouterLink;
