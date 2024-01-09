import { HttpProvider, IconService } from 'icon-sdk-js';


export const getICXBalance = async (address: string) => {
    const baseUrl:any = process.env.REACT_APP_ICX_HTTP_PROVIDER;
    const httpProvider = new HttpProvider(baseUrl);
    const iconService = new IconService(httpProvider);

    return new Promise(async (resolve, reject) => {
      try {
         let balanceObject = await iconService.getBalance(address).execute();
         let icxBalance = balanceObject.div(1e18).toString();
        resolve(icxBalance);
      } catch (e) {
        reject({ msg: "Invalid" });
      }
    });
  };