import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';

import ThemeToggle from './ThemeToggle.jsx';
import {
  MenuIcon,
  CloseIcon,
  GitHubIcon,
  TwitterIcon,
  DiscordIcon,
  EmailIcon,
} from '../Icons.jsx';

const Navigation = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const toggleMenu = () => setIsOpen(!isOpen());

  return (
    <>
      <nav class='mt-6 hidden w-[25rem] flex-row justify-between rounded-md border border-white bg-white/5 px-4 py-2 font-normal backdrop-blur-lg md:flex md:w-[50rem]'>
        <div class='flex flex-row gap-2'>
          <ThemeToggle />
          <A href='/' class='nav-button'>
            Home
          </A>
          <A href='/contact' class='nav-button'>
            Contact
          </A>
          <A href='/why' class='nav-button'>
            Why Kaesper?
          </A>
        </div>
        <div class='flex flex-row items-center gap-1'>
          <a
            href='https://github.com/kaesperdev'
            target='_blank'
            data-tooltip='@kaesperdev'
            class='nav-button tooltip bottom'
          >
            <GitHubIcon />
          </a>
          <a
            href='https://twitter.com/@kaesperdev'
            target='_blank'
            data-tooltip='@kaesperdev'
            class='nav-button tooltip bottom'
          >
            <TwitterIcon />
          </a>
          <a
            href='https://discordapp.com/users/246733902096367617'
            target='_blank'
            data-tooltip='Kaesper#0001'
            class='nav-button tooltip bottom'
          >
            <DiscordIcon />
          </a>
          <a
            href='mailto:hello@kaesper.dev'
            target='_blank'
            data-tooltip='hello@kaesper.dev'
            class='nav-button tooltip bottom'
          >
            <EmailIcon />
          </a>
        </div>
      </nav>

      <Show
        when={isOpen()}
        fallback={
          <nav class='fixed z-50 flex w-full flex-row items-center justify-between border-b border-white bg-white/5 p-3 px-4 backdrop-blur-lg md:hidden'>
            <ThemeToggle />
            <button onClick={() => toggleMenu()}>
              <MenuIcon />
            </button>
          </nav>
        }
      >
        <nav class='fixed z-50 flex w-full flex-col font-normal md:hidden'>
          <div class='flex flex-row justify-between border-b border-white bg-white/5 p-3 px-4 backdrop-blur-lg'>
            <ThemeToggle />
            <button onClick={() => toggleMenu()}>
              <CloseIcon />
            </button>
          </div>
          <div class='flex w-screen flex-col justify-between bg-white/5 backdrop-blur-3xl'>
            <div class='flex flex-col'>
              <div class='border-b border-white p-2 text-center'>
                <div class='mb-1 flex w-full flex-row justify-center'>
                  <A
                    href='/'
                    class='nav-button w-[33%]'
                    onClick={() => toggleMenu()}
                  >
                    Home
                  </A>
                  <div class='relative top-1 after:absolute after:content-["|"]'></div>
                  <A
                    href='/contact'
                    class='nav-button w-[33%]'
                    onClick={() => toggleMenu()}
                  >
                    Contact
                  </A>
                  <div class='relative top-1 after:absolute after:content-["|"]'></div>
                </div>
                <A href='/why' class='nav-button' onClick={() => toggleMenu()}>
                  Why Kaesper?
                </A>
              </div>
              <div class='flex flex-row justify-center gap-2 border-b border-white p-2'>
                <a
                  href='https://github.com/kaesperdev'
                  target='about:blank'
                  class='nav-button'
                >
                  <GitHubIcon />
                </a>
                <a
                  href='https://twitter.com/@kaesperdev'
                  target='_blank'
                  class='nav-button'
                >
                  <TwitterIcon />
                </a>
                <a
                  href='https://discordapp.com/users/246733902096367617'
                  target='_blank'
                  class='nav-button'
                >
                  <DiscordIcon />
                </a>
                <a
                  href='mailto:hello@kaesper.dev'
                  target='_blank'
                  class='nav-button'
                >
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </Show>
    </>
  );
};

export default Navigation;
