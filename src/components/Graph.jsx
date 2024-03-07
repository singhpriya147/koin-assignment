import "./Graph.css";
import TradingViewWidget from "./TradingView";
import { useState,useEffect } from "react";
const Graph = () => {
 
  const [bitcoinData, setBitcoinData] = useState(null); 

 
  const fetchBitCoinData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'X-CoinGecko-API-Key': process.env.API_KEY,
            'X-Requested-With': 'XMLHttpRequest',
            'mode':'headers',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBitCoinData(); 
        console.log(data);
        setBitcoinData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!bitcoinData) {
    return <div>Loading...</div>;
  }
  return (
    <div className='bitcoin'>
      <div className='bitcoin-header'>
        <div className='frame-group'>
          <div className='coin-name'>
            <img
              className='coin-icon'
              loading='lazy'
              alt=''
              src='/component-52@2x.png'
            />
            <div className='name'>
              <h3 className='bitcoin2'>Bitcoin</h3>
            </div>
            <div className='btc'>BTC</div>
          </div>
          <button className='rank-div'>
            <div className='frame-child' />
            <div className='rank-1'>Rank #1</div>
          </button>
        </div>
      </div>
      <div className='stats'>
        <div className='sub-stats'>
          <div className='price'>
            <div className='dollor-price'>
              <div className='div-increase'>${bitcoinData.bitcoin.usd}</div>
              <div className='spanhdf'>
                <div className='svgfill'>
                  <button className='button-nextslide'>
                    <img
                      className='button-nextslide-child'
                      alt=''
                      src='/polygon-2.svg'
                    />
                    <div className='edasvg'>
                  
                      {parseFloat(bitcoinData.bitcoin.usd_24h_change).toFixed(2)}%</div>
                  </button>
                  <div className='hour'>(24H)</div>
                </div>
              </div>
            </div>
            <div className='inr'>₹{bitcoinData.bitcoin.inr}</div>
          </div>
          <div className='widget'>
            <TradingViewWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
