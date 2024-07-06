const skillImgLinks = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/p5js/p5js-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
];

export default function Tech() {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-4xl font-semibold uppercase tracking-tight md:text-5xl">
        TECH
      </h2>
      <div className="mb-4 flex w-2/3 flex-wrap justify-start gap-2">
        {skillImgLinks.map((link) => (
          <div>
            <img className="w-12 shrink-0 grow-0" src={link} />
          </div>
        ))}
      </div>
      <ul className="list-inside list-disc">
        <li>Interviewing, Writing, Journalism</li>
        <li>Audio and Music Production, Sound Design, Music Composition</li>
        <li>Data Visualization, Data Sonification</li>
        <li>Creative Coding</li>
      </ul>
    </div>
  );
}
