import Header from './components/Header';
import PickTable from './components/PickTable';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import BlogPages from './components/BlogPages';

function App() {
  return (
    <div className="App bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<PickTable />} />
        <Route path="/blog" element={<BlogPages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
