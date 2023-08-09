import { useContext, memo } from "react";
import { SettingsCtx } from "../../../../context/SettingsCtx";

const Part = memo(({ minute }) => {
  const { isMinutesAroundFace, gapForMinutesAroundFace } = useContext(SettingsCtx);
  let gap = !(minute % gapForMinutesAroundFace);
  let deg = minute * 6;
  return (
    <li data-deg={deg} data-value={minute} style={{ transform: `rotate(${deg}deg)` }} className="interactive-part unselectable">
      {isMinutesAroundFace && gap && (
        <small
          onMouseOver={(e) => e.stopPropagation()}
          className="interactive-part__minute"
          style={{
            transform: `rotate(${-deg}deg)`,
            color: `${minute % 5 ? "grey" : "black"}`,
            fontSize: `${minute % 5 ? "0.6em" : "0.8em"}`,
          }}>
          {minute}
        </small>
      )}
    </li>
  );
});
export default Part;
