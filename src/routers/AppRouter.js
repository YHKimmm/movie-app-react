import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Nav from "../components/navbar/Nav";
import About from "../pages/About";
import Footer from "../components/Footer";
import Favorite from "../pages/Favorite";
import Watch from "../pages/Watch";

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/watch-later" element={<Watch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
