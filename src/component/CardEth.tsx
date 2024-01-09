import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBots } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';



interface CardProps {
  ethBalance: any;
  usdcBalance: any;
  walletDetails: any;
  currentEthValue: any;
}


  const CardEth: React.FC<CardProps> =  ({ethBalance, usdcBalance, walletDetails, currentEthValue}) => {
  const {title, address, chain} = walletDetails
  const availableEth = ethBalance/ 1e18;
  const equivalentUsd = availableEth * currentEthValue

   function modifiedAddress(address: string)   {
    const value = address.substring(0, 7) +"............." + address.substring(address.length - 7);
    return value;
  }

  function handleCopyIcon(address:string) {
    navigator.clipboard.writeText(address);
    toast.success('Address copied to clipboard.');
  }
  return (
    <div className='card-wrapper-eth'>
        <div>
            <div className='card-wrapper-title'>
                {title.includes('Admin') && (
                    <FontAwesomeIcon icon={faUserTie}  size='2x' color='#54B0FF'/>       
                )}
                 {title.includes('Bot') && (
                    <FontAwesomeIcon icon={faBots}  size='2x' color='#472600'/>       
                )}
                 <a href={`https://basescan.org/address/${address}`}  target="_blank" rel="noopener noreferrer" className='header-link'>
                   <p className='card-title' >[{title}]</p>
                </a>
               {title.includes('Admin') && (
                   <FontAwesomeIcon icon={faUserTie}  size='2x' color='#54B0FF'/>       
               )}
                 {title.includes('Bot') && (
                    <FontAwesomeIcon icon={faBots}  size='2x' color='#472600' />       
                )}
            </div>
            <div className='card-wallet-wrapper'>
                <p className='address-title'>Wallet Address
                <FontAwesomeIcon icon={faCopy} className='copy-icon'  onClick={() => handleCopyIcon(address)}/>
                :</p>
                <p className='address-value'> {modifiedAddress(address)}</p>
            </div>
       <div className='amount-wrapper'>
       {
            chain === 'EthereumBase' && ethBalance  ? (
                <div className='eth-details'>
                  <p className='Eth-Balcnce'>Available ETH: {availableEth.toFixed((4))} ETH ~ ${equivalentUsd.toFixed(2)}</p>
                  {usdcBalance ? 
                  <div>
                    <p className='Usdc-Balance'>Available USDC: {(usdcBalance / 1000000).toFixed(3)} USDC</p>
                  </div> : 
                  <div>
                    <p className='loading-usdc-balance skeleton'></p>
                  </div>}
                
              </div>
            ) : (
                <div>
                     <p className='loading-eth-balance skeleton'></p>
                    <p className='loading-usdc-balance skeleton'></p>
                </div>
            )
        }
       </div>
        
       {/* <a href={`https://basescan.org/address/${address}`} target="_blank" rel='noreferrer' className='card-link'>Click Here to See transaction Details</a> */}
      </div>
      <Toaster
          toastOptions={{
            success: {
              style: {
                background: '#9FFF87',
              },
            },
            error: {
              style: {
                background: 'red',
              },
            },
          }}
        />
    </div>
  );
};

export default CardEth;
