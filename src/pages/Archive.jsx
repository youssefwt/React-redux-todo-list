import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchArchive } from "../redux/archiveSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArchive());
  }, []);

  const { archiveData } = useSelector((state) => state.archive);
  // archiveData && console.log(archiveData[0].month);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthNumber = [];
  archiveData &&
    archiveData.forEach((obj) => {
      monthNumber.push(obj.month * 1);
    });
  let monthNames = [];
  monthNumber.forEach((month) => {
    monthNames.push(months[month - 1]);
  });

  return (
    <>
      <Container>
        {monthNames &&
          monthNames.map((month, index) => <Month key={index}>{month}</Month>)}
      </Container>
    </>
  );
};

export default Archive;
