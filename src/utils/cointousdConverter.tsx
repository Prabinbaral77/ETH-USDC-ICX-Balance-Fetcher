import axios from "axios";

const coinToUsdConverters =async (asset: string)  => {
  return new Promise(async(resolve, reject) => {
    try {
        const apiUrl = `${process.env.REACT_APP_COINCAP_BASE_URL}v2/assets/${asset}`;
    
        const response = await axios.get(apiUrl);
        if (response.data && response.data.data.priceUsd) {
          const exchangeRate = response.data.data.priceUsd;
          resolve(exchangeRate);
        } else {
          console.error('Error fetching exchange rate:', response.data.error);
          reject({msg: 'Invalid'})
        }
    
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        reject({msg: 'Invalid'})
      }
  })
}

export default coinToUsdConverters