// api.js



const fetchCoinGeckoData = async () => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/search/trending',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'X-CoinGecko-API-Key': process.env.API_KEY,
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

// const fetchBitCoinData = async () => {
//   try {
//     const response = await fetch(
//       'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true',
//       {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           'X-CoinGecko-API-Key': 'CG-M4HXqFr6ya2Fc7a1kgZtEw22',
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('There was a problem with your fetch operation:', error);
//     throw error;
//   }
// };

export { fetchCoinGeckoData};
