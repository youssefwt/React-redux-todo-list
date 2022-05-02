import styled from "styled-components";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/styled/HeaderComponent";
import Month from "./pages/Month";

const Container = styled.div`
  width: 60vw;
  margin: auto;
  margin-top: 2rem;
  border-radius: 1rem;
  background-color: rgb(250, 235, 230);
  border-radius: 1rem;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/month/:id" element={<Month />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
