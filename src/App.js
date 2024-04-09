import logo from './images/logo.white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenid@s al sitio de <b><i>AVX Informatica</i></b>.
        </p>
        <a
          className="App-link"
          href="mailto:alvaro@avx.cl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctame
        </a>
      </header>
    </div>
  );
}

export default App;
