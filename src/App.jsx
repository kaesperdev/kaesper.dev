import { Routes, Route, Router, Navigate } from '@solidjs/router';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Finds from './pages/Finds';
import Why from './pages/Why';

const App = () => {
  return (
    <Router>
      <p class='text-5xl'>Hello, World!</p>
      <Routes>
        <Route path='*' element={<Navigate href={'/'} />} />
        <Route path='/' component={<Home />} />
        <Route path='/contact' component={<Contact />} />
        <Route path='/finds' component={<Finds />} />
        <Route path='/why' component={<Why />} />
      </Routes>
    </Router>
  );
};

export default App;
