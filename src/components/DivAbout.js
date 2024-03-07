import GroupComponent from "./GroupComponent";
import "./DivAbout.css";

const DivAbout = () => {
  return (
    <div className="div21">
      <div className="about-bitcoin-wrapper">
        <h3 className="about-bitcoin">About Bitcoin</h3>
      </div>
      <div className="what-is-bitcoin-parent">
        <b className="what-is-bitcoin">What is Bitcoin?</b>
        <div className="bitcoins-price-today-is-us16-parent">
          <div className="bitcoins-price-today">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </div>
          <div className="hr" />
        </div>
        <b className="lorem-ipsum-dolor4">Lorem ipsum dolor sit amet</b>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-con-wrapper">
        <div className="lorem-ipsum-dolor-container2">
          <p>lorem-ipsum-dolor5`Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
          
          
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
        
         
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
        
        </div>
      </div>
      <div className="hr-wrapper">
        <div className="hr1" />
      </div>
      <div className="button-next-slide">
        <h3 className="already-holding-bitcoin">Already Holding Bitcoin?</h3>
        <div className="link">
          <div className="div-coin-content1">
            <GroupComponent
              solanaSOLjpeg="/rectangle-11947@2x.png"
              calculateYourProfits="Calculate your Profits"
            />
            <GroupComponent
              solanaSOLjpeg="/rectangle-11947-1@2x.png"
              calculateYourProfits="Calculate your tax liability"
              propBackground="linear-gradient(135.73deg, #ff9865, #ef3031)"
              propGap="27px"
              propBackground1="linear-gradient(135.73deg, #ff9865, #ef3031)"
              propPadding="var(--padding-5xs) var(--padding-12xs) var(--padding-0) var(--padding-0)"
              propPadding1="var(--padding-11xs) var(--padding-mini) var(--padding-11xs) var(--padding-sm)"
              propGap1="0rem 0.063rem"
            />
          </div>
          <div className="hr2" />
        </div>
      </div>

    </div>
  );
};

export default DivAbout;
