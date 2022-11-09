import "./App.scss";

import { AboutUs } from "./components/about-us";
import { Excursions } from "./components/excursions";
import { Footer } from "./components/fotter";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Excursions />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
