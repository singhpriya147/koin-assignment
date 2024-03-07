import Td from "./Td";
import "./Divperformance.css";

const Divperformance = () => {
  return (
    <div className="div7">
      <div className="link-wrapper1">
        <h3 className="performance">Performance</h3>
      </div>
      <div className="divcol">
        <div className="div-cointopmargin1">
          <div className="divpbar29subdiv">
            <div className="todays-low">Today’s Low</div>
            <div className="a-d-a1">46,930.22</div>
          </div>
          <div className="u-n-i">
            <div className="a-v-a-x">
              <div className="c-f-g">
                <div className="divpbar29rangeslider">
                  <div className="divpbar29rangesliderfill" />
                </div>
                <div className="edasvg1">
                  <div className="divabsolute">
                    <div className="divh-2" />
                  </div>
                </div>
              </div>
              <div className="design-parent">
                <div className="button-link">$48,637.83</div>
              </div>
            </div>
          </div>
          <div className="divpbar29subdiv1">
            <div className="todays-high">Today’s High</div>
            <div className="div8">49,343.83</div>
          </div>
        </div>
        <div className="system-organizer">
          <div className="divpbar29subdiv2">
            <div className="w-low">52W Low</div>
            <div className="nextslide">16,930.22</div>
          </div>
          <div className="divpbar29rangeslider1">
            <div className="divpbar29rangesliderfill1" />
          </div>
          <div className="divpbar29subdiv3">
            <div className="w-high">52W High</div>
            <div className="div9">49,743.83</div>
          </div>
        </div>
      </div>
      <div className="coin-content">
        <div className="imgmargin1">
          <div className="divvalign-wrapper">
            <div className="heading-2">
              <div className="fundamentals">Fundamentals</div>
            </div>
            <div className="svgmargin">
              <div className="svg1">
                <img
                  className="new-slide-button"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
          </div>
          <div className="coin-price">
            <div className="centrifuge-c-f-gjpeg">
              <div className="tr">
                <div className="bitcoin-price">Bitcoin Price</div>
                <div className="div10">$16,815.46</div>
              </div>
              <div className="tr1">
                <div className="th">
                  <div className="h-low">24h Low / 24h High</div>
                </div>
                <div className="td1">
                  <div className="divider-line-h">$16,382.07 / $16,874.12</div>
                </div>
              </div>
              <div className="tr2">
                <div className="th1">
                  <div className="d-low">7d Low / 7d High</div>
                </div>
                <div className="td2">
                  <div className="div11">$16,382.07 / $16,874.12</div>
                </div>
              </div>
              <div className="tr3">
                <div className="th2">
                  <div className="trading-volume">Trading Volume</div>
                </div>
                <div className="td3">
                  <div className="div12">$23,249,202,782</div>
                </div>
              </div>
              <div className="tr4">
                <div className="th3">
                  <div className="market-cap-rank">Market Cap Rank</div>
                </div>
                <div className="td4">
                  <div className="div13">#1</div>
                </div>
              </div>
            </div>
            <div className="tr-parent">
              <div className="tr5">
                <div className="th4">
                  <div className="market-cap">Market Cap</div>
                </div>
                <div className="td5">
                  <div className="div-coin-title">$323,507,290,047</div>
                </div>
              </div>
              <div className="tr6">
                <div className="th5">
                  <div className="market-cap-dominance">
                    Market Cap Dominance
                  </div>
                </div>
                <div className="td6">
                  <div className="div14">38.343%</div>
                </div>
              </div>
              <div className="tr7">
                <div className="th6">
                  <div className="volume-market">Volume / Market Cap</div>
                </div>
                <div className="td7">
                  <div className="div15">0.0718</div>
                </div>
              </div>
              <div className="tr8">
                <div className="th7">
                  <div className="all-time-high">All-Time High</div>
                </div>
                <Td
                  prop="$69,044.77 "
                  prop1="-75.6%"
                  nov102021About1Year="Nov 10, 2021 (about 1 year)"
                />
              </div>
              <div className="tr9">
                <div className="th8">
                  <div className="all-time-low">All-Time Low</div>
                </div>
                <Td
                  prop="$67.81 "
                  prop1="24729.1%"
                  nov102021About1Year="Jul 06, 2013 (over 9 years)"
                  propWidth="7.563rem"
                  propHeight="1rem"
                  propColor="#0fba83"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divperformance;
