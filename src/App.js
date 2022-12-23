import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/component/Header/Header";
import AboutUspages from "./component/AboutUspages/AboutUspages";
import EventPage from "./component/EventPage/EventPage";
import PricingPage from "./component/PricingPage/PricingPage";
import Home from "./Mainpage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutuspage" element={<AboutUspages />} />
        <Route exact path="/pricingpage" element={<PricingPage />} />
        <Route exact path="/eventpage" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
