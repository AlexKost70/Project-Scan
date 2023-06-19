import './App.css';
import Header from './components/header/Header';
import Main from './components/mainPage/MainPage';
import TariffsPage from './components/tariffsPage/TariffsPage';
import WhyPage from './components/whyPage/WhyPage';
import Footer from './components/footer/Footer';
import AuthPage from './components/authPage/AuthPage';
import SearchPage from './components/searchPage/SearchPage';
import ResultsPage from './components/resultsPage/ResultsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <ResultsPage />
      <Footer />
    </div>
  );
}

export default App;
