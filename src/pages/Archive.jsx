import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchItems } from "../redux/todoSlice";
import { Link } from "react-router-dom";

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
/////////////////////////////////////////////////////////////////////////////////
const Archive = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  let monthNames = [
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

  const { todos } = useSelector((state) => state.todo);
  function isArchived(item) {
    return item.archived === "true";
  }
  const archivedItems = todos && todos.filter(isArchived);
  let months = [];
  archivedItems &&
    archivedItems.forEach((el) =>
      months.push(`${el.addingDate.substr(0, 2) + el.addingDate.slice(-4)}`)
    );
  console.log(months);
  months = [...new Set(months)];

  return (
    <>
      <Container>
        {archivedItems &&
          months.map((item, index) => (
            <Link
              key={index}
              to={`/month/${item.substr(0, 2)}${item.slice(-4)}`}
            >
              <Month>
                {`${monthNames[item.substr(0, 2) - 1]}-${item.substr(2)}`}
              </Month>
            </Link>
          ))}
      </Container>
    </>
  );
};

export default Archive;
