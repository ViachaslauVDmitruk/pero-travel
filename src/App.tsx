import "./App.scss";

import { AboutUs } from "./components/about-us";
import { BlockRequest } from "./components/block-request";
import { Excursions } from "./components/excursions";
import { Footer } from "./components/fotter";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { SliderExcursions } from "./components/slider-excursions";

function App() {
  return (
    <div className="App">
      <Header />
      <SliderExcursions />
      <AboutUs />
      <Excursions />
      <Gallery />
      <BlockRequest />
      <Footer />
    </div>
  );
}

export default App;
