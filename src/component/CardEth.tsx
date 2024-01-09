import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBots } from '@fortawesome/free-brands-svg-icons';


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

  return (
    <div className='card-wrapper'>
        <div>
            <div className='card-wrapper-title'>
                {title.includes('Admin') && (
                    <FontAwesomeIcon icon={faUserTie}  size='2x' color='#54B0FF'/>       
                )}
                 {title.includes('Bot') && (
                    <FontAwesomeIcon icon={faBots}  size='2x' color='#472600'/>       
                )}
               <p className='card-title'>[{title}]</p>
               {title.includes('Admin') && (
                   <FontAwesomeIcon icon={faUserTie}  size='2x' color='#54B0FF'/>       
               )}
                 {title.includes('Bot') && (
                    <FontAwesomeIcon icon={faBots}  size='2x' color='#472600' />       
                )}
            </div>
            <div className='card-wallet-wrapper'>
                <p className='address-title'>Wallet Address:</p>
                <p className='address-value'> {address}</p>
            </div>
       <div className='amount-wrapper'>
       {
            chain === 'EthereumBase' && ethBalance  ? (
                <div className='eth-details'>
                  <p className='Eth-Balcnce'>Available ETH: {availableEth.toLocaleString('en-US', { maximumFractionDigits: 18 })} ETH ~ ${equivalentUsd.toFixed(2)}</p>
                  {usdcBalance ? 
                  <div>
                    <p className='Usdc-Balance'>Available USDC: {(usdcBalance / 1000000).toLocaleString('en-US', { maximumFractionDigits: 18 })} USDC</p>
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
        
       <a href={`https://basescan.org/address/${address}`} target="_blank" rel='noreferrer' className='card-link'>Click Here to See transaction Details</a>
      </div>
    </div>
  );
};

export default CardEth;
