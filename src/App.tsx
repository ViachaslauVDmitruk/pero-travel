import "./App.scss";

import { AboutUs } from "./components/about-us";
import { Excursions } from "./components/excursions";
import { Header } from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Excursions />
    </div>
  );
}

export default App;
