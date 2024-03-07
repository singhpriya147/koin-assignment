import { useMemo } from "react";
import "./DivcoinMayLikeContainer.css";

const DivcoinMayLikeContainer = ({
  youMayAlsoLike,
  bnbpng,
  bNB,
  prop,
  prop1,
  svg,
  solanaSOLjpeg,
  sOL,
  ethereumTitle,
  solanaLogo,
  svg1,
  xRPXRPpng,
  xRP,
  parentNode,
  currencyBox,
  svg2,
  cardanoADAjpeg,
  aDA,
  seperatorNode,
  coinDesignHome,
  svg3,
  avalancheAVAXpng,
  aVAX,
  prop2,
  priceCard,
  svg4,
  propWidth,
  propPadding,
  propWidth1,
  propPadding1,
  propPadding2,
  propWidth2,
  propPadding3,
  propBackgroundColor,
  propPadding4,
  propColor,
  propWidth3,
  propPadding5,
  propWidth4,
  propTop,
  propBottom,
  propTop1,
  propBottom1,
}) => {
  const divcoinTopStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const divcoinTop1Style = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding1,
    };
  }, [propWidth1, propPadding1]);

  const divincreaseStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const divcoinTop2Style = useMemo(() => {
    return {
      width: propWidth2,
      padding: propPadding3,
    };
  }, [propWidth2, propPadding3]);

  const divincrease1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding4,
    };
  }, [propBackgroundColor, propPadding4]);

  const parentNodeStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const divcoinTop3Style = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const divincrease2Style = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  const divcoinTop4Style = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const buttonNextSlideStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const buttonNextSlide1Style = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom1,
    };
  }, [propTop1, propBottom1]);

  return (
    <div className="divcoin-may-like-container">
      <div className="divcoin-may-like-title">
        <h3 className="you-may-also">{youMayAlsoLike}</h3>
      </div>
      <div className="divlike-charts">
        <div className="divswiper-container">
          <div className="divswiper-wrapper">
            <div className="divchart-itemmargin">
              <div className="divchart-item">
                <div className="link1">
                  <div className="divitem-wrapper">
                    <div className="divcoin-content">
                      <div className="divcoin-topmargin">
                        <div className="divcoin-top" style={divcoinTopStyle}>
                          <div className="divcoin-title">
                            <div className="imgmargin2">
                              <img
                                className="bnbpng-icon"
                                alt=""
                                src={bnbpng}
                              />
                            </div>
                            <div className="spanh2d-baaa528e">
                              <div className="bnb">{bNB}</div>
                            </div>
                          </div>
                          <div className="divincrease">
                            <div className="spanh2d-2af321bc">
                              <div className="div26">{prop}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divcoin-price">
                        <div className="div27">{prop1}</div>
                      </div>
                    </div>
                    <div className="svg2">
                      <div className="svg-fill">
                        <img
                          className="svg-icon1"
                          loading="lazy"
                          alt=""
                          src={svg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divchart-itemmargin1">
              <div className="divchart-item1">
                <div className="link2">
                  <div className="divitem-wrapper1">
                    <div className="divcoin-content1">
                      <div className="divcoin-topmargin1">
                        <div className="divcoin-top1" style={divcoinTop1Style}>
                          <div className="divcoin-title1">
                            <div className="imgmargin3">
                              <img
                                className="solana-soljpeg-icon"
                                alt=""
                                src={solanaSOLjpeg}
                              />
                            </div>
                            <div className="spanh2d-66c8fb74">
                              <div className="sol">{sOL}</div>
                            </div>
                          </div>
                          <div
                            className="divincrease1"
                            style={divincreaseStyle}
                          >
                            <div className="spanh2d-f2ad7ec5">
                              <div className="ethereum-title">
                                {ethereumTitle}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divcoin-price1">
                        <div className="solana-logo1">{solanaLogo}</div>
                      </div>
                    </div>
                    <div className="svg3">
                      <div className="svg-fill1">
                        <img
                          className="svg-icon2"
                          loading="lazy"
                          alt=""
                          src={svg1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divchart-itemmargin2">
              <div className="divchart-item2">
                <div className="link3">
                  <div className="divitem-wrapper2">
                    <div className="divcoin-content2">
                      <div className="divcoin-topmargin2">
                        <div className="divcoin-top2" style={divcoinTop2Style}>
                          <div className="divcoin-title2">
                            <div className="imgmargin4">
                              <img
                                className="xrp-xrppng-icon"
                                alt=""
                                src={xRPXRPpng}
                              />
                            </div>
                            <div className="spanh2d-64ba46e9">
                              <div className="xrp">{xRP}</div>
                            </div>
                          </div>
                          <div
                            className="divincrease2"
                            style={divincrease1Style}
                          >
                            <div className="spanh2d-47bd3297">
                              <div
                                className="parent-node"
                                style={parentNodeStyle}
                              >
                                {parentNode}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divcoin-price2">
                        <div className="currency-box">{currencyBox}</div>
                      </div>
                    </div>
                    <div className="svg4">
                      <div className="svg-fill2">
                        <img
                          className="svg-icon3"
                          loading="lazy"
                          alt=""
                          src={svg2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divchart-itemmargin3">
              <div className="divchart-item3">
                <div className="link4">
                  <div className="divitem-wrapper3">
                    <div className="divcoin-content3">
                      <div className="divcoin-topmargin3">
                        <div className="divcoin-top3" style={divcoinTop3Style}>
                          <div className="divcoin-title3">
                            <div className="imgmargin5">
                              <img
                                className="cardano-adajpeg-icon"
                                alt=""
                                src={cardanoADAjpeg}
                              />
                            </div>
                            <div className="spanh2d-a0371697">
                              <div className="ada">{aDA}</div>
                            </div>
                          </div>
                          <div
                            className="divincrease3"
                            style={divincrease2Style}
                          >
                            <div className="spanh2d-f5876622">
                              <div className="seperator-node">
                                {seperatorNode}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divcoin-price3">
                        <div className="coin-design-home">{coinDesignHome}</div>
                      </div>
                    </div>
                    <div className="svg5">
                      <div className="svg-fill3">
                        <img className="svg-icon4" alt="" src={svg3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divchart-itemmargin4">
              <div className="divchart-item4">
                <div className="link5">
                  <div className="divitem-wrapper4">
                    <div className="divcoin-content4">
                      <div className="divcoin-topmargin4">
                        <div className="divcoin-top4" style={divcoinTop4Style}>
                          <div className="divcoin-title4">
                            <div className="imgmargin6">
                              <img
                                className="avalanche-avaxpng-icon"
                                alt=""
                                src={avalancheAVAXpng}
                              />
                            </div>
                            <div className="spanh2d-59f57d28">
                              <div className="avax">{aVAX}</div>
                            </div>
                          </div>
                          <div className="divincrease4">
                            <div className="spanh2d-908e7f81">
                              <div className="div28">{prop2}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divcoin-price4">
                        <div className="price-card">{priceCard}</div>
                      </div>
                    </div>
                    <div className="svg6">
                      <div className="svg-fill4">
                        <img className="svg-icon5" alt="" src={svg4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-next-slide1" style={buttonNextSlideStyle}>
          <div className="e0d847asvg">
            <div className="e0d847asvg-fill">
              <img className="e0d847asvg-icon" alt="" src="/e0d847asvg.svg" />
            </div>
          </div>
        </div>
        <div className="button-next-slide2" style={buttonNextSlide1Style}>
          <div className="e0d847asvg1">
            <div className="e0d847asvg-fill1">
              <img className="e0d847asvg-icon1" alt="" src="/e0d847asvg.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivcoinMayLikeContainer;
