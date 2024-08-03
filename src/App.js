import './App.css';
import Navbar from './components/Navbar';
import SehirEkle from './components/SehirEkle';
import SehirListele from './components/SehirListele';
import WelcomePage from './components/WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/sehir-ekle" element={<SehirEkle />} />
          <Route path="/sehir-listele" element={<SehirListele />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
