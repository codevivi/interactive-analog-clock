import Clock from "./components/Clock/index.js";
import ParticlesBg from "particles-bg";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <div className="App">
      {!isMobile && <ParticlesBg type="circle" bg={true} />}
      <Clock></Clock>
    </div>
  );
}

export default App;
