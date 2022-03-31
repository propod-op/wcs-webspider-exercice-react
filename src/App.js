import logo from './components/webspider-toile-blanche.png';

import './components/home.css';
{/* import './App.css';*/}

function App() {
  return (
    <section className="home">
      <div className="searchBloc">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Chercher un film</h1>
        <input type="text" id="filmName" name="filmName" required minlength="4" maxlength="200" size="10"/>
      </div>
    </section>
  );
}

export default App;
