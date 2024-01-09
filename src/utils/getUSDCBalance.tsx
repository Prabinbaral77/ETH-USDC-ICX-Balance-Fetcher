import axios from "axios";

export const getUSDCBalance = async(address: string) => {
    return new Promise(async(resolve, reject) => {
        try{
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            const apiKey = process.env.REACT_APP_BASESCAN_API_KEY;
            const contactAddress = process.env.REACT_APP_USDC_SCORE;
            // Build the API URL with addresses separated by commas
            const apiUrl = `${process.env.REACT_APP_BASESCAN_BASEURL}/api?module=account&action=tokenbalance&contractaddress=${contactAddress}&address=${address}&tag=latest&apikey=${apiKey}`;
      
            // Make the API request
            const response = await axios.get(apiUrl);

            if (response.data.status === '1') {
                resolve(response.data.result)
            }else {
                reject({msg: 'Error Occured while fetching USDC!'})
            }
        }catch(err) {
            reject({msg: 'Invalid'})
        }
    })
}