import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Month = styled.button`
  margin: 0 0.5rem 0.5rem 0;
  min-width: 220px;
  padding: 1rem 2rem;
  background-color: coral;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 2em;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;

const Archive = () => {
  return (
    <>
      <Container>
        <Month>October</Month>
        <Month>November</Month>
        <Month>December</Month>
        <Month>january</Month>
      </Container>
    </>
  );
};

export default Archive;
