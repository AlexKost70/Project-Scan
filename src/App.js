import './App.css';
import Header from './components/header/Header';
import Main from './components/mainPage/MainPage';
import TariffsPage from './components/tariffsPage/TariffsPage';
import WhyPage from './components/whyPage/WhyPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <WhyPage />
      <TariffsPage />
      <Footer />
    </div>
  );
}

export default App;
