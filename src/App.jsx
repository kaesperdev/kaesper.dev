import { Routes, Route, Navigate } from '@solidjs/router';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Finds from './pages/Finds';
import Why from './pages/Why';

const App = () => {
  return (
    <div class='flex min-h-screen flex-col items-center bg-gradient-to-br from-[#cf5f84] to-[#cc755a] font-josefin font-light text-white dark:from-[#1f3970] dark:to-[#091324] dark:text-white'>
      <Routes>
        <Route path='*' element={<Navigate href={'/'} />} />
        <Route path='/' component={<Home />} />
        <Route path='/contact' component={<Contact />} />
        <Route path='/finds' component={<Finds />} />
        <Route path='/why' component={<Why />} />
      </Routes>
    </div>
  );
};

export default App;
