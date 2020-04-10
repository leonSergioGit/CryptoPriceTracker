const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, curOption){
        try {
          const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinOption}&interval=1d,30d&convert=${curOption}`);
          
          let output = '';

          res.data.forEach(coin => {
              output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price} | Rank: ${coin.rank.blue}\n`;
          })

          console.log(res.data)
          return output;
        } catch (err) {
            handleAPIError(err);
        }
    }
}


function handleAPIError(err){
    if(err.response.status === 401){
        throw new Error('Your API Key is invalid - Go to https://nomics.com');
    } else if(err.response.status === 404){
        throw new Error('Your API is not responding');
    } else {
        throw new Error('Something is not working');
    }
}



module.exports = CryptoAPI;