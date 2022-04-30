import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 1rem;
`;

const Alink = styled.button`
  background-color: #faebe6;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.93);
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
