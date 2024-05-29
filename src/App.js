import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contanct/Contact';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import Project from './Components/Work/Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
// import Verify from './Components/Admin/Verify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={
          <Admin/>
        } />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <main className="main">
                <Home />
                <About />
                <Skills />
                <Project />
                <Contact />
              </main>
              <Footer />
              <ScrollUp />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
