import { useMemo } from "react";
import "./ButtonNextslide.css";

const ButtonNextslide = ({ sandeep, johnSmith, propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="button-nextslide1">
      <div className="frame-parent1">
        <div className="sandeep-parent">
          <img className="sandeep-icon" loading="lazy" alt="" src={sandeep} />
          <div className="john-smith-parent" style={frameDivStyle}>
            <div className="john-smith">{johnSmith}</div>
            <div className="designation-here">Designation here</div>
          </div>
        </div>
        <div className="lorem-ipsum-dolor7">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </div>
      </div>
    </div>
  );
};

export default ButtonNextslide;
