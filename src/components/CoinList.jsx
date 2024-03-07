
import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import CoinCard from './CoinCard';
import './CoinList.css';
import {fetchCoinGeckoData }from '../assets/api';
const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const data = await fetchCoinGeckoData(); 
         console.log(data); 
         setCoins(data.coins);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };

     fetchData();
   }, []);

  const goToPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const goToNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, coins.length - 3));
  };

  const renderCoinCards = () => {
    const displayedCoins = coins.slice(startIndex, startIndex + 3);
    return displayedCoins.map((coin) => (
      <CoinCard key={coin.item.id} item={coin.item} />
    ));
  };

  return (
    <div className='coin-list'>
      <h1>Coin List</h1>
      <div className='carousel'>
        <div className='left' onClick={goToPrev}>
          <FaAngleLeft style={{ fontSize: 30 }} />
        </div>
        <div className='center'>
          <div className='card-container'>{renderCoinCards()}</div>
        </div>
        <div className='right' onClick={goToNext}>
          <FaAngleRight style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default CoinList;
