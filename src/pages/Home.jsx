import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AddItem from "../components/AddItemComponent";
import TodoItem from "../components/TodoItem";
import { fetchItems } from "../redux/todoSlice";

const Container = styled.div`
  padding: 1rem;
`;

const Home = () => {
  const dispatch = useDispatch();

  const [updater, setUpdater] = useState(true);

  const itemDeleted = () => {
    setUpdater(!updater);
  };
  const itemArchived = () => {
    setUpdater(!updater);
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [updater]);

  const { todos } = useSelector((state) => state.todo);

  function isArchived(item) {
    return item.archived === "false";
  }
  const currentItems = todos && todos.filter(isArchived);

  currentItems && console.log(currentItems);

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
              itemArchived={itemArchived}
              itemDeleted={itemDeleted}
              key={index}
              {...item}
            />
          ))}
      </Container>
    </>
  );
};

export default Home;
