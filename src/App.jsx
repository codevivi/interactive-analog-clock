import Clock from "./components/Clock/index.jsx";
import ParticlesBg from "particles-bg";
import ClockContainer from "./components/ClockContainer/index.jsx";
import Settings from "./components/Settings/index.jsx";
import { isMobile } from "react-device-detect";
import { SettingsProvider } from "./context/SettingsCtx.jsx";
import { ClockProvider } from "./context/ClockCtx.jsx";

function App() {
  return (
    <div className="App">
      {!isMobile && <ParticlesBg type="circle" bg={true} />}
      <ClockContainer>
        <SettingsProvider>
          {/* <GlobalProvider> */}
          {/* <ClockProvider> */}
          <Settings>
            <ClockProvider>
              <Clock />
            </ClockProvider>
          </Settings>
          {/* </ClockProvider> */}
          {/* </GlobalProvider> */}
        </SettingsProvider>
      </ClockContainer>
    </div>
  );
}

export default App;
