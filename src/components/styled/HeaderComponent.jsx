import React from "react";
import styled from "styled-components";
import RouterLink from "../RouterLink";
import { Link, useLocation } from "react-router-dom";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: coral;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const DateStyled = styled.div`
  font-size: 2rem;
  padding: 1rem 2rem;
  color: white;
`;

const HeaderComponent = () => {
  const location = useLocation();
  const path = location.pathname;

  const m = new Date().getMonth();
  const d = new Date().getDate();
  const y = new Date().getFullYear();
  const dayIndex = new Date().getDay();
  const getDayName = (dayIndex) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex];
  };
  const dayName = getDayName(dayIndex);

  return (
    <Container>
      <DateStyled>{`${dayName} ${m + 1}-${d}-${y}`}</DateStyled>
      <LinkContainer>
        <Link to="/">
          <RouterLink disabled={path === "/" ? true : false}>Home</RouterLink>
        </Link>
        <Link to="/archive">
          <RouterLink disabled={path === "/archive" ? true : false}>
            Archive
          </RouterLink>
        </Link>
      </LinkContainer>
    </Container>
  );
};

export default HeaderComponent;
