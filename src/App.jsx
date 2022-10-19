import { Routes, Route, Navigate } from '@solidjs/router';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Why from './pages/Why';

const App = () => {
  return (
    <div class='bg-gradient-to-br from-[#cf5f84] to-[#cc755a] font-josefin font-light text-white dark:from-[#1f3970] dark:to-[#091324] dark:text-white'>
      <div class='flex min-h-[98vh] flex-col items-center'>
        <Navigation />
        <main class='mx-6 mt-24 md:mx-0 md:mt-16 md:w-[46rem]'>
          <Routes>
            <Route path='*' element={<Navigate href={'/'} />} />
            <Route path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/why' component={Why} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
