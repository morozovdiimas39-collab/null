import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
