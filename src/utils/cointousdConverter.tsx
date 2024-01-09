import axios from "axios";

const coinToUsdConverters =async (asset: string)  => {
  return new Promise(async(resolve, reject) => {
    try {
        const apiKey = process.env.REACT_APP_COINAPI_KEY;
        const apiUrl = `${process.env.REACT_APP_COINAPI_BASEURL}/exchangerate/${asset}/USD?apikey=${apiKey}`;
    
        const response = await axios.get(apiUrl);
    
        if (response.data && response.data.rate) {
          const exchangeRate = response.data.rate;
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