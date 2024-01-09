import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBots } from '@fortawesome/free-brands-svg-icons';

interface CardProps {
 icxBalance: any;
  walletDetails: any;
  currentIcxValue: any
}


  const CardIcx: React.FC<CardProps> =  ({icxBalance, walletDetails, currentIcxValue}) => {
  const {title, address, chain} = walletDetails
  const equivalentUsd = icxBalance * currentIcxValue;

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
            chain === 'Icon' && icxBalance  ? (
                <div className='eth-details'>
                  <p className='Eth-Balcnce'>Available ICX: {icxBalance.toLocaleString('en-US', { maximumFractionDigits: 18 })} ICX </p>
                  <p className='Usdc-Balance'>Equivalent USD: ${equivalentUsd.toFixed(2) } </p>
              </div>
            ) : (
                <div>
                     <p className='loading-eth-balance skeleton'></p>
                    <p className='loading-usdc-balance skeleton'></p>
                </div>
            )
        }
       </div>
        
        <a href={`https://tracker.icon.community/address/${address}`} target="_blank" rel='noreferrer' className='card-link'>Click Here to See transaction Details</a>
      </div>
    </div>
  );
};

export default CardIcx;
