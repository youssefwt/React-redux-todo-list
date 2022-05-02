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
  background-color: ${({ checked }) => (checked ? "lightgray" : "#fffefb")};
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  transition: background-color 1s;
`;

const Item = styled.div`
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 65%;
  text-align: center;
  background-color: ${({ checked }) => (checked ? "lightgray" : "#fffefb")};
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;

const ItemDate = styled.div`
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
  isChecked,
}) => {
  const [checked, setChecked] = useState(isChecked === "true");
  const dispatch = useDispatch();

  const handleCheck = () => {
    setChecked(!checked);
    let data = { isChecked: `${!checked}` };
    dispatch(updateItem({ id, data }));
  };
  const deleteItem = (id) => {
    dispatch(removeItem(id));
    itemDeleted();
  };
  const archiveItem = () => {
    // console.log("item archived: ", id);
    itemArchived();
    let data = { archived: "true" };
    dispatch(updateItem({ id, data }));
  };

  return (
    <Container>
      <CheckBox checked={checked} archived={archived} onClick={handleCheck} />
      <Title checked={checked}>{title}</Title>
      <Item checked={checked}>{desc}</Item>
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
        disabled={!checked}
        color="white"
        bg="orange"
        archived={archived}
      >
        Arc
      </ButtonComponent>
      <ItemDate archived={archived}>{addingDate}</ItemDate>
    </Container>
  );
};

export default TodoItem;
