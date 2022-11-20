import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SENİ ÇOK SEVİYORUM BUUSEEEEEMMMMMM
        </p>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button className="Buton">Buton</button>
        <div>
          <button className="btn" >Buton2</button>
        </div>
        <a
          className="App-link"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Native öğrenme yolları
        </a>
      </header>
    </div>
    
  );
}

export default App;
