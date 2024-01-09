import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

interface SidebarProps {
  setDisplayCategory: (category: string) => void; // Adjust the type accordingly
  displayCategory:string
}

const Sidebar: React.FC<SidebarProps> = ({ setDisplayCategory, displayCategory }) => {
  return (
    <div className="sidebar-outer-wrapper">
      <p className='sidebar-title'>Gangstaverse</p>
      <div className='sidebar-menu'>
        <div className='ethItem' onClick={() => setDisplayCategory('Ethereum')}>
            <FontAwesomeIcon icon={faEthereum} size="2x" />
            <p style={{ color: displayCategory === "Ethereum" ? '#54B0FF' : 'inherit' }}>EVM Balance</p>
        </div>
        <hr/>
        <div className='icxItem' onClick={() => setDisplayCategory('Icon')}>
            <img src="icx.svg" alt="ICX" width="50" height="50" />
            <p style={{ color: displayCategory === "Icon" ? '#54B0FF' : 'inherit' }}>ICON Balance</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
