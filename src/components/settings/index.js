import "./style.css";
import Button from "../Button";
import { useState, useEffect } from "react";

import closeIcon from "../../resources/icons/close.svg";

const Settings = () => {
  const [settingsOn, setSettingsOn] = useState(false);
  const [digitalOn, setDigitalOn] = useState(true);
  const [everyFiveMinutesOn, setEveryFiveMinutesOn] = useState(false);
  const [allMinutesOn, setAllMinutesOn] = useState(false);
  const [hiddenMinutes, setHiddenMinutes] = useState(true);

  function closeSettings() {
    setSettingsOn(false);
  }
  function showEveryFiveMinutes() {
    setEveryFiveMinutesOn(true);
    setAllMinutesOn(false);
  }
  function showAllMinutes() {
    setEveryFiveMinutesOn(false);
    setAllMinutesOn(true);
  }
  function hideMinutes() {
    setEveryFiveMinutesOn(false);
    setAllMinutesOn(false);
    setHiddenMinutes(true);
  }
  function showMinutes() {
    setEveryFiveMinutesOn(false);
    setHiddenMinutes(false);
    setEveryFiveMinutesOn(true);
  }

  return (
    <div className="clock-settings">
      <div className="clock-settings__inner">
        <Button addPosClass="clock-settings__button-close-pos" styling="close" icon={closeIcon} handleClick={closeSettings} />
        <h1 className="clock-settings__title">Nustatymai</h1>
        <div className="clock-settings__section">
          <h2 className="clock-settings__title-h2">Elektronis laikrodukas</h2>
          <div className="clock-settings__buttons-container">
            {digitalOn && <Button large text="Paslėpti" handleClick={() => setDigitalOn(false)}></Button>}
            {!digitalOn && <Button large text="Rodyti" handleClick={() => setDigitalOn(true)}></Button>}
            {digitalOn && !format12 && <Button large text="Perjunkti į 12 valandų formatą" handleClick={() => setFormat12(true)}></Button>}
            {digitalOn && format12 && <Button large text="Perjunkti į 24 valandų formatą" handleClick={() => setFormat12(false)}></Button>}
          </div>
        </div>
        <div className="clock-settings__section">
          <h2 className="clock-settings__title-h2">Mokomasis Laikrodukas</h2>
          <div className="clock-settings__buttons-container">
            {!interactive && <Button large text="Įjunkti" tooltip tooltipText="Galėsite sukti laiką ant laikroduko laikydami įspaudę kairį pelės klavišą." handleClick={() => setInteractive(true)}></Button>}
            {interactive && <Button large text="Išjunkti" handleClick={() => setInteractive(false)}></Button>}
            {interactive && !hiddenMinutes && everyFiveMinutesOn && <Button large text="Rodyti visas minutes" handleClick={showAllMinutes}></Button>}
            {interactive && allMinutesOn && !hiddenMinutes && <Button large text="Rodyti kas penkias minutes" handleClick={showEveryFiveMinutes}></Button>}
            {interactive && !hiddenMinutes && <Button large text="Paslėpti minutes" handleClick={hideMinutes}></Button>}
            {interactive && hiddenMinutes && <Button large text="Rodyti minutes" handleClick={showMinutes}></Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
