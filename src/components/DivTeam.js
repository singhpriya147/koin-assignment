import ButtonNextslide from "./ButtonNextslide";
import "./DivTeam.css";

const DivTeam = () => {
  return (
    <div className="div23">
      <div className="team-wrapper">
        <h3 className="team">Team</h3>
      </div>
      <div className="lorem-ipsum-dolor8">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </div>
      <ButtonNextslide sandeep="/sandeep@2x.png" johnSmith="John Smith" />
      <ButtonNextslide
        sandeep="/sandeep-1@2x.png"
        johnSmith="Elina Williams"
        propPadding="var(--padding-0) var(--padding-sm)"
      />
      <ButtonNextslide
        sandeep="/sandeep-2@2x.png"
        johnSmith="John Smith"
        propPadding="var(--padding-0) var(--padding-mini)"
      />
    </div>
  );
};

export default DivTeam;
