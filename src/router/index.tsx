import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import Donate from '../pages/donate';
import Contact from '../pages/contact';
import { ReactElement } from 'react';
import Footer from '../components/footer';
import Choose from '../pages/choose';
import Information from '../pages/choose/[id]';
import Payment from '../pages/payment';

function AppRouter(props: { children: ReactElement }) {
  return (
    <Router>
      {props.children}
      <main className="mx-auto">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/choose/:chooseId" element={<Information />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRouter;
