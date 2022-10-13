import Clock from "./components/Clock/index.js";
import ParticlesBg from "particles-bg";
import ClockContainer from "./components/ClockContainer/index.js";
import Settings from "./components/Settings";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <div className="App">
      {!isMobile && <ParticlesBg type="circle" bg={true} />}
      <ClockContainer>
        <Settings></Settings>
      </ClockContainer>
    </div>
  );
}

export default App;
