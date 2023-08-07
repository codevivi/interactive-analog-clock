import Part from "./Part";
import { useContext, useState } from "react";
import { TimeCtx } from "../../../context/TimeCtx";
import { SettingsCtx } from "../../../context/SettingsCtx";
function Parts({ isDragEnabled }) {
  const { isInteractive } = useContext(SettingsCtx);
  const { time, minutes, moveOnMinute } = useContext(TimeCtx);
  const [touchedEl, setTouchedEl] = useState(null);

  const handleMouseOver = (e) => {
    if (e.target.dataset.value) {
      moveOnMinute(time, minutes, e.target.dataset.value);
    }
  };

  const handleTouchMove = (e) => {
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;
    let el = document.elementFromPoint(x, y);
    if (touchedEl !== el && el?.dataset?.value) {
      setTouchedEl(el);
      moveOnMinute(time, minutes, el.dataset.value);
    }
  };

  return (
    <ul draggable="false" className="interactive" onTouchMove={isDragEnabled && isInteractive ? (e) => handleTouchMove(e) : null} onMouseOver={isDragEnabled && isInteractive ? (e) => handleMouseOver(e) : null}>
      {[...Array(60).keys()].map((_, m) => (
        <Part key={m} minute={m} />
      ))}
    </ul>
  );
}
export default Parts;
