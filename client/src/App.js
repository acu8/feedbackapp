import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hey hey hey.
        </p>
        <a
          className="App-link"
          href="/auth/google"
        >
          Sign in with Google
        </a>
      </header>
    </div>
  );
}

export default App;
