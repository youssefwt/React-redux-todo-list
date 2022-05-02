import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ButtonComponent from "./styled/ButtonComponent";
import { removeItem, updateItem } from "../redux/todoSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  transform: scale(2.2);
  display: ${({ archived }) => (archived === "true" ? "none" : "block")};
`;
const Title = styled.div`
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 15%;
  text-align: center;
  background-color: #fffefb;
  background-color: ${({ status }) => (status ? "lightgray" : "#fffefb")};
  text-decoration: ${({ status }) => (status ? "line-through" : "none")};
  transition: background-color 1s;
`;

const Item = styled.div`
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 65%;
  text-align: center;
  background-color: ${({ status }) => (status ? "lightgray" : "#fffefb")};
  text-decoration: ${({ status }) => (status ? "line-through" : "none")};
  transition: background-color 1s;
`;

const Itemdate = styled.div`
  background-color: #fffefb;
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 15%;
  text-align: center;
  display: ${({ archived }) => (archived === "true" ? "block" : "none")};
`;
////////////////////////////////////////////////////////////////////////////////////////////
const TodoItem = ({
  desc,
  title,
  id,
  itemArchived,
  itemDeleted,
  archived,
  addingDate,
}) => {
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  const handleCheck = () => {
    setStatus(!status);
  };
  const deleteItem = (id) => {
    dispatch(removeItem(id));
    itemDeleted();
  };
  const archiveItem = () => {
    // console.log("item archived: ", id);
    let data = { archived: "true" };
    dispatch(updateItem({ id, data }));
    itemArchived();
  };

  return (
    <Container>
      <CheckBox archived={archived} onClick={handleCheck} />
      <Title status={status}>{title}</Title>
      <Item status={status}>{desc}</Item>
      <ButtonComponent
        handleClick={() => deleteItem(id)}
        color="darkred"
        bg="pink"
        archived={archived}
      >
        Del
      </ButtonComponent>
      <ButtonComponent
        handleClick={archiveItem}
        disabled={!status}
        color="white"
        bg="orange"
        archived={archived}
      >
        Arc
      </ButtonComponent>
      <Itemdate archived={archived}>{addingDate}</Itemdate>
    </Container>
  );
};

export default TodoItem;
