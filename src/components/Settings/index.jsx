import "./style.css";
import Button from "../Button";
import settingsIcon from "../../resources/icons/settings_gear.svg";
import closeIcon from "../../resources/icons/close.svg";
import { useContext, useState } from "react";
import { SettingsCtx } from "../../context/SettingsCtx";

const Settings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettings = () => {
    setIsSettingsOpen((isOpen) => !isOpen);
  };

  const { isInteractive, makeInteractive, makeNotInteractive, isDigitalVisible, showDigital, hideDigital, isHourFormat12, makeDigitalFormat12, makeDigitalFormat24, isMinutesAroundFace, showMinutesAroundFace, hideMinutesAroundFace, chooseGapForMinutesAroundFace } = useContext(SettingsCtx);
  return (
    <div className="clock-settings">
      <Button addPosClass="open-settings-button-position" large styling={isSettingsOpen ? "danger" : "normal"} icon={isSettingsOpen ? closeIcon : settingsIcon} handleClick={toggleSettings} />
      <div className="clock-settings__inner">
        {isSettingsOpen && (
          <>
            <h1 className="clock-settings__title">Nustatymai</h1>
            <div className="clock-settings__section">
              <h2 className="clock-settings__title-h2">Elektronis laikrodukas</h2>
              <div className="clock-settings__buttons-container">
                {isDigitalVisible && <Button text="Paslėpti" handleClick={hideDigital}></Button>}
                {!isDigitalVisible && <Button text="Rodyti" handleClick={showDigital}></Button>}
                {isDigitalVisible && !isHourFormat12 && <Button text="Perjunkti į 12 valandų formatą" handleClick={makeDigitalFormat12}></Button>}
                {isDigitalVisible && isHourFormat12 && <Button text="Perjunkti į 24 valandų formatą" handleClick={makeDigitalFormat24}></Button>}
              </div>
            </div>
            <div className="clock-settings__section">
              <h2 className="clock-settings__title-h2">Mokomasis Laikrodukas</h2>
              <div className="clock-settings__buttons-container">
                {!isInteractive && <Button text="Įjunkti" tooltip tooltipText="Galėsite sukti laiką ant laikroduko laikydami įspaudę kairį pelės klavišą." handleClick={makeInteractive}></Button>}
                {isInteractive && <Button text="Išjunkti" handleClick={makeNotInteractive}></Button>}
              </div>
            </div>
            <div className="clock-settings__section">
              <h2 className="clock-settings__title-h2">Minučių padalų numeravimas</h2>
              <div className="clock-settings__buttons-container">
                {!isMinutesAroundFace && <Button text="Rodyti minutes" handleClick={showMinutesAroundFace}></Button>}
                {isMinutesAroundFace && <Button text="Paslėpti minutes" handleClick={hideMinutesAroundFace}></Button>}

                {isMinutesAroundFace && <p className="clock-settings__text">Pasirinkite tarpus tarp rodomų minučių:</p>}
                <div className="clock-settings__gap-buttons">
                  {isMinutesAroundFace && <Button text="1" handleClick={chooseGapForMinutesAroundFace(1)}></Button>}
                  {isMinutesAroundFace && <Button text="5" handleClick={chooseGapForMinutesAroundFace(5)}></Button>}
                  {isMinutesAroundFace && <Button text="10" handleClick={chooseGapForMinutesAroundFace(10)}></Button>}
                  {isMinutesAroundFace && <Button text="15" handleClick={chooseGapForMinutesAroundFace(15)}></Button>}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
