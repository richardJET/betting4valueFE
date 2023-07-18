import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import BlogPages from './components/BlogPages';
import Blog from './components/Blog';
import BettingTable from './components/BettingTable';

function App() {
  return (
    <div className="bg-white ">
      <Header />
      <Routes>
        <Route path="/" element={<BettingTable />} />
        <Route path="/:sport" element={<BettingTable />} />
        <Route path="/blog" element={<BlogPages />} />
        <Route path="/blog/:slug" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
