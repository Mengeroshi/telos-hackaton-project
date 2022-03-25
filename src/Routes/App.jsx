import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InputPage } from "../pages/InputPage/InputPage";
import { Portfolio } from "../pages/Portfolio/Portfolio";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputPage/>} />
        <Route path="/portfolio" element={<Portfolio />}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
