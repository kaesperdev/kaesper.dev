import {
  VSCodeIcon,
  GitIcon,
  YarnIcon,
  JavaScriptIcon,
  NodeJSIcon,
  SolidJSIcon,
  TailwindCSSIcon,
  DockerIcon,
  MongoDBIcon,
  RedisIcon,
  AWSIcon,
  CloudflareIcon,
  LinksIcon,
} from '../components/Icons';

const Home = () => {
  return (
    <>
      <h1 class='text-4xl font-bold md:text-5xl'>Hey, I'm Casper 👋 🇵🇱</h1>
      <section id='about'>
        <h2 class='mt-8 text-3xl font-normal md:mt-12 md:text-4xl'>
          About me 💭
        </h2>
        <p class='mt-4 text-xl md:text-2xl'>
          I'm a 19-year-old computer science enthusiast with major interest in
          software development and security. I'm primarily focused on backend
          development, but I'm always happy & ready to learn new things in other
          areas as well. I spend my free time reading books, drinking tea,
          sleeping, or playing League of Legends, with the last one being my
          worst habit.
        </p>
      </section>
      <section id='stack'>
        <h2 class='mt-8 text-3xl font-normal md:text-4xl'>Tech Stack 💻</h2>
        <p class='mt-4 text-xl md:text-2xl'>
          I use a variety of technologies and tools to help streamline my
          development process and increase the quality of both my code, and my
          projects. Here are some of the things that I'm most familiar with:
        </p>
        <ul class='mt-4 flex flex-row justify-evenly rounded-lg border border-white bg-white/5 py-2 backdrop-blur-lg md:mt-8'>
          <li class='tooltip top' data-tooltip='Visual Studio Code'>
            <VSCodeIcon />
          </li>
          <li class='tooltip top' data-tooltip='Git'>
            <GitIcon />
          </li>
          <li class='tooltip top' data-tooltip='Yarn'>
            <YarnIcon />
          </li>
          <li class='tooltip top' data-tooltip='JavaScript'>
            <JavaScriptIcon />
          </li>
          <li class='tooltip top' data-tooltip='Node.js'>
            <NodeJSIcon />
          </li>
          <li class='tooltip top' data-tooltip='SolidJS'>
            <SolidJSIcon />
          </li>
          <li class='tooltip top' data-tooltip='Tailwind CSS'>
            <TailwindCSSIcon />
          </li>
          <li class='tooltip top' data-tooltip='MongoDB'>
            <MongoDBIcon />
          </li>
          <li class='tooltip top' data-tooltip='Redis'>
            <RedisIcon />
          </li>
          <li class='tooltip top' data-tooltip='Docker'>
            <DockerIcon />
          </li>
          <li class='tooltip top' data-tooltip='Amazon Web Services'>
            <AWSIcon />
          </li>
          <li class='tooltip top' data-tooltip='Cloudflare'>
            <CloudflareIcon />
          </li>
        </ul>
      </section>
      <section id='projects'>
        <h2 class='mt-8 text-3xl font-normal md:text-4xl'>Projects 📚</h2>
        <p class='mt-4 text-xl md:text-2xl'>
          Most of the things I've worked on are either private or not yet ready
          for public release. Here are some of the things that I've worked on
          that are publicly available:
        </p>
        <div class='mt-4 mb-4 grid grid-cols-1 grid-rows-2 gap-4 md:mt-8 md:grid-cols-2 md:grid-rows-1'>
          <div class='flex flex-col rounded-md border border-gray-300 bg-white/5 p-4 backdrop-blur-lg '>
            <a class='flex w-min flex-row' href='#'>
              <p class='mr-2 text-2xl font-normal'>Lorem</p>
              <LinksIcon />
            </a>
            <p class='text-xl font-extralight'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio reiciendis pariatur iure doloremque a iusto iste,
              explicabo delectus expedita cumque?
            </p>
          </div>
          <div class='flex flex-col rounded-md border border-gray-300 bg-white/5 p-4 backdrop-blur-lg'>
            <a class='flex w-min flex-row' href='#'>
              <p class='mr-2 text-2xl font-normal'>Lorem</p>
              <LinksIcon />
            </a>
            <p class='text-xl font-extralight'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate quas enim, magni nisi veniam aperiam rerum minus
              asperiores maxime aliquam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
