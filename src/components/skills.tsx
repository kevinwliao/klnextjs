const skillImgLinks = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
];

export default function Skills() {
  return (
    <div id="hey">
      <h2 className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl">
        Tech
      </h2>
      <div className="mt-6 flex w-2/3 flex-wrap justify-start gap-2 border-4 border-black bg-slate-50 p-4 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] transition hover:drop-shadow-[16px_25px_0px_rgba(0,0,0,1)] motion-reduce:transition-none dark:border-white dark:bg-slate-950 dark:drop-shadow-[10px_10px_0px_rgba(255,255,255,1)] dark:hover:drop-shadow-[16px_25px_0px_rgba(255,255,255,1)]">
        {skillImgLinks.map((link) => (
          <img className="w-20 shrink-0 grow-0" src={link} />
        ))}
      </div>
    </div>
  );
}
