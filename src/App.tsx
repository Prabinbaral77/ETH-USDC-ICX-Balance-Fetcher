import './App.css';
// import Sidebar from './component/Sidebar';
import BalanceCard from './component/BalanceCard';

function App() {
  // const [displayCategory, setDisplayCategory] = useState('Ethereum')
  
  return (
    <div className="App">
      {/* <Sidebar setDisplayCategory={setDisplayCategory} displayCategory={displayCategory}/> */}
      <BalanceCard  />
    </div>
  );
}

export default App;
