import "./style.css";
import Button from "../Button";
import { useState } from "react";
import settingsIcon from "../../resources/icons/settings_gear.svg";
import closeIcon from "../../resources/icons/close.svg";

const Settings = ({ children }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isDigitalVisible, setIsDigitalVisible] = useState(true);
  const [gapForMinutesAroundFace, setGapForMinutesAroundFace] = useState(1); //1 or 5 or 10 only
  const [isMinutesAroundFace, setIsMinutesAroundFace] = useState(false);
  const [isHourFormat12, setIsHourFormat12] = useState(false);

  const propsToClock = {
    isInteractive: isInteractive,
    isDigitalVisible: isDigitalVisible,
    isMinutesAroundFace: isMinutesAroundFace,
    gapForMinutesAroundFace: gapForMinutesAroundFace,
    isHourFormat12: isHourFormat12,
  };

  return (
    <div className="surround">
      {!isSettingsOpen && <Button addPosClass="open-settings-button-position" styling="info" icon={settingsIcon} handleClick={() => setIsSettingsOpen(true)} />}
      {isSettingsOpen && (
        <div className="clock-settings">
          <div className="clock-settings__inner">
            <Button addPosClass="close-settings-button-position" styling="close" icon={closeIcon} handleClick={() => setIsSettingsOpen(false)} />
            <h1 className="clock-settings__title">Nustatymai</h1>
            <div className="clock-settings__section">
              <h2 className="clock-settings__title-h2">Elektronis laikrodukas</h2>
              <div className="clock-settings__buttons-container">
                {isDigitalVisible && <Button large text="Paslėpti" handleClick={() => setIsDigitalVisible(false)}></Button>}
                {!isDigitalVisible && <Button large text="Rodyti" handleClick={() => setIsDigitalVisible(true)}></Button>}
                {isDigitalVisible && !isHourFormat12 && <Button large text="Perjunkti į 12 valandų formatą" handleClick={() => setIsHourFormat12(true)}></Button>}
                {isDigitalVisible && isHourFormat12 && <Button large text="Perjunkti į 24 valandų formatą" handleClick={() => setIsHourFormat12(false)}></Button>}
              </div>
            </div>
            <div className="clock-settings__section">
              <h2 className="clock-settings__title-h2">Mokomasis Laikrodukas</h2>
              <div className="clock-settings__buttons-container">
                {!isInteractive && <Button large text="Įjunkti" tooltip tooltipText="Galėsite sukti laiką ant laikroduko laikydami įspaudę kairį pelės klavišą." handleClick={() => setIsInteractive(true)}></Button>}
                {isInteractive && <Button large text="Išjunkti" handleClick={() => setIsInteractive(false)}></Button>}
              </div>
            </div>
            <div className="clock-settings__section">
              <h2 className="clock-settings__title-h2">Minučių padalų numeravimas</h2>
              <div className="clock-settings__buttons-container">
                {!isMinutesAroundFace && <Button large text="Rodyti minutes" handleClick={() => setIsMinutesAroundFace(true)}></Button>}
                {isMinutesAroundFace && <Button large text="Paslėpti minutes" handleClick={() => setIsMinutesAroundFace(false)}></Button>}

                {isMinutesAroundFace && <p className="clock-settings__text">Pasirinkite tarpus tarp rodomų minučių:</p>}
                <div className="clock-settings__gap-buttons">
                  {isMinutesAroundFace && <Button text="1" handleClick={() => setGapForMinutesAroundFace(1)}></Button>}
                  {isMinutesAroundFace && <Button text="5" handleClick={() => setGapForMinutesAroundFace(5)}></Button>}
                  {isMinutesAroundFace && <Button text="10" handleClick={() => setGapForMinutesAroundFace(10)}></Button>}
                  {isMinutesAroundFace && <Button text="15" handleClick={() => setGapForMinutesAroundFace(15)}></Button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {children(propsToClock)}
    </div>
  );
};

export default Settings;
