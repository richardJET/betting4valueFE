import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import BlogPages from "./components/BlogPages";
import Blog from "./components/Blog";
import BettingTable from "./components/BettingTable";
import ErrorPage from "./components/ErrorPage";
import PastPicks from "./components/PastPicks";
import Community from "./components/Community";

function App() {
  return (
    <div className="bg-white text-black">
      <Header />
      <Routes>
        <Route path="/" element={<BettingTable />} />
        <Route path="/:sport" element={<BettingTable />} />
        <Route path="/:sport/history" element={<PastPicks />} />
        <Route path="/blog" element={<BlogPages />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
