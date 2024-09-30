import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import Donate from '../pages/donate';
import Contact from '../pages/contact';
import { ReactElement } from 'react';

function AppRouter(props: { children: ReactElement }) {
    return (
        <Router>
            {props.children}
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
