import React from 'react';
import './CoinCard.css'; // Import CSS for styling if needed

const CoinCard = ({ item }) => {
  return (
    <div className='coin-card'>
      <div className='coin-info'>
        <div>
          <img src={item.thumb} alt={item.name} className='coin-thumbnail' />
          <h2>{item.name}</h2>
          <button className='vector-group'>
            <img className='frame-inner' alt='' src='/polygon-2.svg' />
            <div className='coin-container'>
              {parseFloat(
                item.data.price_change_percentage_24h.usd
              ).toFixed(2)}
              %
            </div>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <p> {item.data.price}</p>
            {/* <p>Market Cap: {item.data.market_cap}</p> */}
          </div>
          <div>
            <img
              src={item.data.sparkline}
              alt={item.name}
              className='coin-sparkline'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
