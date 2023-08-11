import "./style.css";
import { useMemo, useContext, useState, useEffect } from "react";
import { TimeCtx } from "../../context/TimeCtx";
import { chooseBg } from "./chooseBg.js";
import { chooseBgColor } from "./chooseBgColor.js";
import { images } from "./bgImages";

const DynamicBg = () => {
  const { hours } = useContext(TimeCtx);
  const [loaded, setLoaded] = useState(0);
  const [loading, setLoading] = useState(true);

  const increaseLoading = () => {
    setLoaded((num) => num + 1);
  };

  useEffect(() => {
    if (loaded < images.length) {
      return;
    }
    setLoading(false);
  }, [loaded]);

  return useMemo(() => {
    const bg = chooseBg(hours);
    const underBgColor = chooseBgColor(hours);
    return (
      <div className="dynamic-bg" style={{ backgroundColor: underBgColor, display: loading ? "none" : "block" }}>
        {images.map((img) => (
          <img key={img.name} onLoad={increaseLoading} className={`dynamic-bg__img ${bg === img.name ? "visible" : ""}`} src={img.src} width="612" height="612" alt={img.alt} />
        ))}
      </div>
    );
  }, [hours, loading]);
};

export default DynamicBg;
