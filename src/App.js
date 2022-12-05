import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/component/Header/Header";
import Home from "./Mainpage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
