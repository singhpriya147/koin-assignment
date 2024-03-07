import { useMemo } from "react";
import "./Td.css";

const Td = ({
  prop,
  prop1,
  nov102021About1Year,
  propWidth,
  propHeight,
  propColor,
}) => {
  const imgMarginStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const spanStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="td">
      <div className="img-margin-parent">
        <div className="img-margin" style={imgMarginStyle}>
          <span className="img-margin-txt-container">
            <span>{prop}</span>
            <span className="span" style={spanStyle}>
              {prop1}
            </span>
          </span>
        </div>
        <div className="nov-10-2021">{nov102021About1Year}</div>
      </div>
    </div>
  );
};

export default Td;
