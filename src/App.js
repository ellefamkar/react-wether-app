import Search from './Components/Search';
// import Weather from './Components/Weather';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Search defaultCity="Melbourne" />
    </div>
    <small className="text-light"> 
      <a href="https://github.com/ellefamkar/react-wether-app" target="_blank" rel="noreferrer" className="text-light text-decoration-none">Open-source </a>
      by Elle Famkar
    </small>
    </>
  );
}

export default App;
