import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems } from "../redux/todoSlice";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";

const Container = styled.div`
  padding: 1rem;
`;

const Month = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const { todos } = useSelector((state) => state.todo);

  let thisMonthItems = [];

  todos &&
    todos.forEach((el, index) => {
      const itemDate = `${
        el.addingDate.substr(0, 2) + el.addingDate.slice(-4)
      }`;
      console.log(itemDate);
      if (itemDate === params.id) {
        thisMonthItems.push(el);
      }
    });

  function isArchived(item) {
    return item.archived === "true";
  }

  const archivedItems = todos && thisMonthItems.filter(isArchived);

  return (
    <Container>
      {todos &&
        archivedItems.map((item, index) => (
          <TodoItem key={index} {...item}></TodoItem>
        ))}
    </Container>
  );
};

export default Month;
