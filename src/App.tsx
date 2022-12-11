import { Main } from "./pages/main";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Excursions } from "./pages/excursions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/excursions" element={<Excursions />} />
      </Routes>
    </div>
  );
}

export default App;
