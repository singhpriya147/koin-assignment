import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  solanaSOLjpeg,
  calculateYourProfits,
  propBackground,
  propGap,
  propBackground1,
  propPadding,
  propPadding1,
  propGap1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      background: propBackground,
      gap: propGap,
    };
  }, [propBackground, propGap]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  const spanhdcfbStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const avalancheAVAXpngStyle = useMemo(() => {
    return {
      padding: propPadding1,
      gap: propGap1,
    };
  }, [propPadding1, propGap1]);

  return (
    <div className="rectangle-group" style={groupDivStyle}>
      <div className="frame-item" style={rectangleDivStyle} />
      <img
        className="solana-s-o-ljpeg1"
        loading="lazy"
        alt=""
        src={solanaSOLjpeg}
      />
      <div className="spanhdcfb1" style={spanhdcfbStyle}>
        <div className="div-increase1">
          <b className="calculate-your-profits">{calculateYourProfits}</b>
          <button
            className="avalanche-a-v-a-xpng"
            style={avalancheAVAXpngStyle}
          >
            <div className="check-now">Check Now</div>
            <img
              className="iconlylightarrow-right"
              alt=""
              src="/iconlylightarrow--right.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
