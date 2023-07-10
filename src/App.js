import Header from './components/Header';
import SoccerTable from './components/SoccerTable';
import CsgoTable from './components/CsgoTable';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import BlogPages from './components/BlogPages';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<SoccerTable />} />
        <Route path="/soccer" element={<SoccerTable />} />
        <Route path="/csgo" element={<CsgoTable />} />
        <Route path="/blog" element={<BlogPages />} />
        <Route path="/blog/:slug" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
