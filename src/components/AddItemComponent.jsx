import React, { useState } from "react";
import styled from "styled-components";
import InputComponent from "./styled/InputComponent";
import ButtonComponent from "./styled/ButtonComponent";
import { useDispatch } from "react-redux";
import { addNewItem } from "../redux/todoSlice";
// import { newItem } from "../redux/todoSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const addItem = (title, desc) => {
    if (title && desc) {
      const item = { title, desc };
      // dispatch(newItem(item));
      dispatch(addNewItem(item));
      setDesc("");
      setTitle("");
    }
  };

  console.log(title, desc);
  return (
    <>
      <Container>
        <InputComponent
          value={title}
          placeholder="Title"
          setInput={setTitle}
          width="18%"
        />
        <InputComponent
          value={desc}
          placeholder="description"
          minwidth="35rem"
          width="70%"
          setInput={setDesc}
        />
        <ButtonComponent
          handleClick={() => addItem(title, desc)}
          color="darkgreen"
          bg="lightgreen"
        >
          + ADD
        </ButtonComponent>
      </Container>
    </>
  );
};

export default AddItem;
