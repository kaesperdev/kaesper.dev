import { createSignal } from 'solid-js';
import {
  DiscordIcon,
  EmailIcon,
  KeyIcon,
  TwitterIcon,
} from '../components/Icons';

const Contact = () => {
  const [email, setEmail] = createSignal('');
  const [message, setMessage] = createSignal('');
  const [errMessage, setErrMessage] = createSignal('');

  const emailRegex = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );

  const sendMessage = () => {
    if (!email() || !message())
      return setErrMessage('Please fill out all fields');

    if (!emailRegex.test(email()))
      return setErrMessage('Please enter a valid email address');

    if (message().length < 20 || message().length > 500)
      return setErrMessage('Message must be between 20 and 500 characters');

    setErrMessage('Thank you for your message!');
  };

  return (
    <section id='contact'>
      <h1 class='text-4xl font-bold md:text-5xl'>Let's work together 💬</h1>
      <h2 class='mt-6 text-2xl md:mt-10 md:text-3xl'>
        I'm currently looking for new opportunities. If you have a project that
        you'd like to get started, think you need my help with something or just
        fancy saying hello, then please get in touch with me using the form
        below, or any other method listed on the right.
      </h2>
      <div class='mb-20 mt-6 grid grid-cols-1 md:mt-10 md:grid-cols-3 md:gap-4'>
        <div class='row-span-3 rounded-md border border-white bg-white/5 p-4 backdrop-blur-lg md:col-span-2'>
          <p class='mb-1 text-sm font-normal'>E-MAIL</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder='example@gmail.com'
            type='text'
            class='placeholder: mb-4 w-full rounded-md bg-white/10 p-2 text-white backdrop-blur-lg placeholder:text-gray-300 dark:placeholder:text-gray-400'
          />
          <p class='mb-1 text-sm font-normal'>MESSAGE</p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi Casper, I'd like to work with you on..."
            class='placeholder: mb-4 h-36 w-full rounded-md bg-white/10 p-2 text-white backdrop-blur-lg placeholder:text-gray-300 dark:placeholder:text-gray-400'
          />
          <div class='flex w-full flex-row items-center justify-between'>
            <p class='font-normal text-white'>{errMessage}</p>
            <button
              onClick={sendMessage}
              class='rounded-full border border-white bg-white/10 px-4 py-2 font-normal transition hover:bg-white/20'
            >
              Submit
            </button>
          </div>
        </div>
        <div class='items-center'>
          <a
            class='mt-4 flex flex-row items-center justify-center rounded-md border border-white bg-white/10 py-4 px-4 backdrop-blur-lg md:mt-0 md:justify-start'
            href='https://twitter.com/@kaesperdev'
            target='_blank'
          >
            <TwitterIcon />
            <p class='mx-2 text-xl'>@kaesperdev</p>
          </a>
          <a
            class='mt-4 flex flex-row items-center justify-center rounded-md border border-white bg-white/10 py-4 px-4 backdrop-blur-lg md:justify-start'
            href='https://discordapp.com/users/246733902096367617'
            target='_blank'
          >
            <DiscordIcon />
            <p class='mx-2 text-xl'>Kaesper#0001</p>
          </a>
          <a
            class='mt-4 flex flex-row items-center justify-center rounded-md border border-white bg-white/10 py-4 px-4 backdrop-blur-lg md:justify-start'
            href='mailto:hello@kaesper.dev'
            target='_blank'
          >
            <EmailIcon />
            <p class='mx-2 text-xl'>hello@keasper.dev</p>
          </a>
          <a
            class='mt-4 flex flex-row items-center justify-center rounded-md border border-white bg-white/10 py-4 px-4 backdrop-blur-lg md:justify-start'
            href='/src/assets/pgp.key'
            target='_blank'
          >
            <KeyIcon />
            <p class='mx-2 text-xl'>PGP Key</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
