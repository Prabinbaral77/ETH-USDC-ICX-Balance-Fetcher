import '../App.css'
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardEth from './CardEth';
import { useEffect, useState } from 'react';
import CardIcx from './CardIcx';
import { getETHBalance } from '../utils/getEthBalance';
import { getUSDCBalance } from '../utils/getUSDCBalance';
import { getICXBalance } from '../utils/getIcxBalance';
import coinToUsdConverters from '../utils/cointousdConverter';




const BalanceCard = ( ) => {
  const [adminEthBalance, setAdminEthBalance] = useState(0)
  const [adminUsdcalance, setAdminUsdcBalance] = useState(0)
  const [bot1EthBalance, setBot1EthBalance] = useState(0)
  const [bot1Usdcalance, setBot1UsdcBalance] = useState(0)
  const [bot2Usdcalance, setBot2UsdcBalance] = useState(0)
  const [bot2EthBalance, setBot2EthBalance] = useState(0)
  const [bot3Usdcalance, setBot3UsdcBalance] = useState(0)
  const [bot3EthBalance, setBot3EthBalance] = useState(0)
  const [bot4Usdcalance, setBot4UsdcBalance] = useState(0)
  const [bot4EthBalance, setBot4EthBalance] = useState(0)
  const [bot5Usdcalance, setBot5UsdcBalance] = useState(0)
  const [bot5EthBalance, setBot5EthBalance] = useState(0)
  const [generalWalletIcxBalance, setGeneralWalletIcxBalance] = useState<number | string>(0);

  const [currentEthValue, setCurrentEthValue] = useState(0)
  const [currentIcxValue, setCurrentIcxValue] = useState(0)

  useEffect(() => {
    console.log(currentIcxValue, "currenticxvalue");
    
  }, [currentIcxValue])

  const EthWalletWhoseBalanceNeedToFetch = [
    {
      title: 'Base GangWar Admin',
      address: '0xd960dd5d7aa13d9D523693f990a8C426Ef186660',
      track: ['baseEth'],
      chain: 'EthereumBase'
    },
    {
      title: 'Bot 1',
      address: '0x96045387DF8cEE03491091212cc774C0651bAcF1',
      track: ['baseEth', 'usdc'],
      chain: 'EthereumBase'
    },
    {
      title: 'Bot 2',
      address: '0xE1A4e36815591bC41843875AD69ec50A5d2a518B',
      track: ['baseEth', 'usdc'],
      chain: 'EthereumBase'
    },
    {
      title: 'Bot 3',
      address: '0x121A52B6147a0eA377305b21011940317495A160',
      track: ['baseEth', 'usdc'],
      chain: 'EthereumBase'
    },
    {
      title: 'Bot 4',
      address: '0x85F3Fa846521370c0c0AB9974f9ba6c1AdAc8947',
      track: ['baseEth', 'usdc'],
      chain: 'EthereumBase',
    },
    {
      title: 'Bot 5',
      address: '0xBd086952B01A0Dd46e0341675A4Cf5afC97AF732',
      track: ['baseEth', 'usdc'],
      chain: 'EthereumBase',
    }
  ]

  const IcxWalletWhoseBalanceNeedToFetch = [
    {
      title: 'General Wallet',
      address: 'hx7cee4ba249e1bd32da31be3e8e4fc943ad227c98',
      track: ['Icx'],
      chain: 'Icon'
    },
  ]

  const fetchEthBalances = async (address: string, title: string) => {
    try {
      const response:any = await getETHBalance(address)

      // Check if the API request was successful
      if (response) {
        switch (title) {
          case 'Base GangWar Admin':
            setAdminEthBalance(response)
            break;
        case 'Bot 1':
          setBot1EthBalance(response)
            break;
        case 'Bot 2':
          setBot2EthBalance(response)
          break;
        case 'Bot 3':
          setBot3EthBalance(response)
          break;
        case 'Bot 4':
          setBot4EthBalance(response)
          break;
        case 'Bot 5':
          setBot5EthBalance(response)
            break;
          default:
            break;
        }
      } 
    } catch (error) {
      console.error('Error fetching eth balances:', error);
    }
  };

  const fetchUSDCBalances = async (address: string, title: string) => {
    try {
      
      const response: any = await getUSDCBalance(address)

      // Check if the API request was successful
      if (response) {
        switch (title) {
          case 'Base GangWar Admin':
            setAdminUsdcBalance(response)
            break;
          case 'Bot 1':
            setBot1UsdcBalance(response)
            break;
          case 'Bot 2':
            setBot2UsdcBalance(response)
            break;
          case 'Bot 3':
            setBot3UsdcBalance(response)
            break;
          case 'Bot 4':
            setBot4UsdcBalance(response)
            break;
          case 'Bot 5':
            setBot5UsdcBalance(response)
            break;
          default:
            break;
        }
      } 
    } catch (error) {
      console.error('Error fetching usdc balances:', error);
    }
  };

  const fetchIcxBalances = async (address: string, title: string) => {
   try {
    const getIcxBalance:any = await getICXBalance(address);
   if(getIcxBalance) {
    switch (title) {
      case 'General Wallet':
        setGeneralWalletIcxBalance(getIcxBalance);
       break;
    default:
        break;
    }
   }
   }catch(error) {
    console.log(error);
   }
  };

  async function fetchAllEthBalances() {
    for (let i = 0; i< EthWalletWhoseBalanceNeedToFetch.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      const wallet = EthWalletWhoseBalanceNeedToFetch[i].address
      const title = EthWalletWhoseBalanceNeedToFetch[i].title;
      await fetchEthBalances(wallet, title);
      await fetchUSDCBalances(wallet, title);
    }
  }

  async function fetchAllIcxBalance() {
    for (let i = 0; i< IcxWalletWhoseBalanceNeedToFetch.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      const wallet = IcxWalletWhoseBalanceNeedToFetch[i].address
      const title = IcxWalletWhoseBalanceNeedToFetch[i].title;
      await fetchIcxBalances(wallet, title);
    }
  }


  const coinToUsdConverter =async () => {
    try {
      const assets = ['ethereum', 'icon'];
      for(let count =0; count < 2; count++) {
        const asset = assets[count];
        const response:any = await coinToUsdConverters(asset)
    
        if (response) {
          console.log(response, "haharesponse", asset);
          
          if (count === 0) {
            setCurrentEthValue(response)
          }else{
            setCurrentIcxValue(response)
          }
        } else {
          console.error('Error fetching exchange rate:', response.data.error);
        }
      }
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
}

  useEffect(() => {
    fetchAllEthBalances()
    fetchAllIcxBalance()
    coinToUsdConverter()
  }, [])



  return (
    <div>
        <div>
    <div className='balance-card-wrapper'>
      <div className='balance-card-title'>
        <p>Gangstaverse Balance Fetcher</p> 
      </div>
      <div className="internal-card-wrapper">
          <CardEth ethBalance={adminEthBalance} usdcBalance={adminUsdcalance} walletDetails = {EthWalletWhoseBalanceNeedToFetch[0]} currentEthValue={currentEthValue}/>
          <CardEth ethBalance={bot1EthBalance} usdcBalance={bot1Usdcalance} walletDetails = {EthWalletWhoseBalanceNeedToFetch[1]} currentEthValue={currentEthValue}/>
          <CardEth ethBalance={bot2EthBalance} usdcBalance={bot2Usdcalance} walletDetails = {EthWalletWhoseBalanceNeedToFetch[2]} currentEthValue={currentEthValue}/>
          <CardEth ethBalance={bot3EthBalance} usdcBalance={bot3Usdcalance} walletDetails = {EthWalletWhoseBalanceNeedToFetch[3]} currentEthValue={currentEthValue}/>
          <CardEth ethBalance={bot4EthBalance} usdcBalance={bot4Usdcalance} walletDetails = {EthWalletWhoseBalanceNeedToFetch[4]} currentEthValue={currentEthValue}/>
          <CardEth ethBalance={bot5EthBalance} usdcBalance={bot5Usdcalance} walletDetails = {EthWalletWhoseBalanceNeedToFetch[5]} currentEthValue={currentEthValue}/>
         <CardIcx icxBalance={generalWalletIcxBalance}  walletDetails = {IcxWalletWhoseBalanceNeedToFetch[0]} currentIcxValue={currentIcxValue}/>

       </div>
      </div>
    </div>
        {/* <div>
    <div className='balance-card-wrapper'>
      <div className='balance-card-title'>
      <img src="icx.svg" alt="ICX" width="50" height="50" className='icon-img' />
        <p>Gangstaverse ICON Balance</p> 
        <img src="icx.svg" alt="ICX" width="50" height="50" className='icon-img' />
      </div>
      <div className="internal-card-wrapper">
         <CardIcx icxBalance={generalWalletIcxBalance}  walletDetails = {IcxWalletWhoseBalanceNeedToFetch[0]} currentIcxValue={currentIcxValue}/>
       </div>
      </div>
    </div> */}
    </div>
  );
};

export default BalanceCard;
