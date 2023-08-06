import Clock from "./components/Clock/index.js";
import ParticlesBg from "particles-bg";
import ClockContainer from "./components/ClockContainer/index.js";
import Settings from "./components/Settings";
import { isMobile } from "react-device-detect";
import { GlobalProvider } from "./context/GlobalCtx.jsx";

function App() {
  return (
    <div className="App">
      {!isMobile && <ParticlesBg type="circle" bg={true} />}
      <GlobalProvider>
        <ClockContainer>
          <Settings>{(props) => <Clock {...props}></Clock>}</Settings>
        </ClockContainer>
      </GlobalProvider>
    </div>
  );
}

export default App;
