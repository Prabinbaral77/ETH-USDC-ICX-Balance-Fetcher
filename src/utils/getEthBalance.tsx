import axios from "axios";

interface EthBalanceResult {
    balance: number;
}
export const getETHBalance = async(address: string): Promise<EthBalanceResult> => {
    return new Promise<EthBalanceResult>(async(resolve, reject) => {
        try{
            const apiKey = process.env.REACT_APP_BASESCAN_API_KEY;

            // Build the API URL with addresses separated by commas
            const apiUrl = `${process.env.REACT_APP_BASESCAN_BASEURL}/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
      
            // Make the API request
            const response = await axios.get(apiUrl);

            if (response.data.status === '1') {
                resolve(response.data.result)
            }else {
                reject({msg: 'Error Occured while fetching ETH!', data: response.data})
            }
        }catch(err) {
            reject({msg: 'Invalid'})
        }
    })
}