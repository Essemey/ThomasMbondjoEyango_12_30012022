import './css/App.css';
import Home from './pages';


function App() {


  return (
    <main className="App">
      <header id="header-x">
        <nav id="nav-x">
          <ul>
            <li><a href="#"><img src='./images/sportsee.svg' id="logo" /></a></li>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Profil</a></li>
            <li><a href="#">Réglage</a></li>
            <li><a href="#">Communauté</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <header id="header-y">
          <nav id="nav-y">
            <ul>
              <li><a href="#"><img src='./images/meditation.svg' /></a></li>
              <li><a href="#"><img src='./images/swimming.svg' /></a></li>
              <li><a href="#"><img src='./images/cycling.svg' /></a></li>
              <li><a href="#"><img src='./images/bodybuilding.svg' /></a></li>
            </ul>
          </nav>
          <p>Copiryght, SportSee 2020</p>
        </header>
        <Home />
      </div>
    </main>
  );
}

export default App;
