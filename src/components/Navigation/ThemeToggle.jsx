import { createEffect, createSignal } from 'solid-js';
import { SunIcon, MoonIcon } from '../../components/Icons';

const initializeTheme = () => {
  let isDarkMode;
  if (typeof localStorage !== 'undefined' && localStorage.getItem('darkMode')) {
    isDarkMode = localStorage.getItem('darkMode');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode = 'true';
  } else {
    isDarkMode = 'false';
  }
  return isDarkMode === 'true';
};

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = createSignal(initializeTheme());

  createEffect(() => {
    if (darkMode()) {
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
    }
    localStorage.setItem('darkMode', darkMode());
  });

  return (
    <button
      class='nav-button'
      onClick={() => {
        setDarkMode(!darkMode());
      }}
    >
      {darkMode() ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
