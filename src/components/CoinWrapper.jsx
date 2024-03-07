import "./CoinWrapper.css";
import React, { useState, useEffect } from 'react';
import {fetchCoinGeckoData} from '../assets/api';
const CoinWrapper = () => {
  
  const [coins, setCoins] = useState([]);
   useEffect(() => {
     const fetchData = async () => {
       try {
         const data = await fetchCoinGeckoData(); // Call fetchCoinGeckoData function
         console.log(data); // Log the fetched data to see its structure
         setCoins(data.coins); // Assuming the response contains an array of coins data
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };

     fetchData();
   }, []);
  return (
    <div className='coin-wrapper'>
      <div className='div-itemmargin'>
        <div className='div-chartitem'>
          <div className='imgnodesolana-s-o-ljpeg'>
            <h3 className='get-started-with'>
              Get Started with KoinX for FREE
            </h3>
            <div className='with-our-range'>
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </div>
          </div>
          <img
            className='project-vesselcentrifuge-c-f-g'
            alt=''
            src='/frame-3.svg'
          />
          <button className='buttonnextslide'>
            <div className='get-started-for'>Get Started for FREE</div>
            <img
              className='iconlylightarrow-right1'
              alt=''
              src='/iconlylightarrow--right.svg'
            />
          </button>
        </div>
      </div>
      <div className='realised-profitloss'>
        <div className='trending-coins-24h-parent'>
          <h3 className='trending-coins-24h'>Trending Coins (24h)</h3>
          <div className='view-more-wrapper'>
            <div className='view-more'>View more</div>
          </div>
        </div>
        <div className='frame-parent2'>
        

          {coins.slice(0, 3).map((coin, index) => (
            <div key={index} className={`frame-parent${index + 3}`}>
              <div className={`component-50-parent frame-parent${index + 3}`}>
                <img
                  className='component-50-icon'
                  loading='lazy'
                  alt={coin.item.name}
                  src={coin.item.small}
                />

                <div className='coin-name'>{coin.item.name}</div>
              </div>
              <button className='vector-group'>
                <img className='frame-inner' alt='' src='/polygon-2.svg' />
                <div className='coin-container'>
                  {parseFloat(
                    coin.item.data.price_change_percentage_24h.usd
                  ).toFixed(2)}%
                 
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinWrapper;
