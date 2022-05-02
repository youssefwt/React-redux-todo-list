import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AddItem from "../components/AddItemComponent";
import TodoItem from "../components/TodoItem";
import { fetchItems } from "../redux/todoSlice";

const Container = styled.div`
  padding: 1rem;
`;

const Home = () => {
  const location = useLocation().pathname;

  console.log(location);

  const dispatch = useDispatch();

  const [updater, setUpdater] = useState(true);

  const itemDeleted = () => {
    setUpdater(!updater);
  };
  const itemArchived = () => {
    setUpdater(!updater);
  };

  const { todos } = useSelector((state) => state.todo);
  function isArchived(item) {
    return item.archived === "false";
  }

  useEffect(() => {
    dispatch(fetchItems());
  }, [updater]);
  const currentItems = todos && todos.filter(isArchived);

  return (
    <>
      <Container>
        <AddItem />
        <br />
        <hr />
        <br />
        {currentItems &&
          currentItems.map((item, index) => (
            <TodoItem
              location={location}
              updater={updater}
              itemArchived={itemArchived}
              itemDeleted={itemDeleted}
              key={item.id}
              {...item}
            />
          ))}
      </Container>
    </>
  );
};

export default Home;
