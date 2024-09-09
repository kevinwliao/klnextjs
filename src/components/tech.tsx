const skillImgLinks = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
];

export default function Tech() {
  return (
    <>
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-semibold uppercase tracking-tight md:text-4xl">
          DESIGN
        </h2>
        {/* <div className="mb-4 flex flex-wrap justify-start gap-2">
        {skillImgLinks.map((link, i) => (
          <div key={i}>
            <img className="w-12 shrink-0 grow-0" src={link} />
          </div>
        ))}
      </div> */}
        <ul className="list-inside list-disc">
          <li>Design thinking</li>
          <li>UX research: surveying, interviewing</li>
          <li>Wireframing, prototyping, testing</li>
          <li>Designing modern, responsive web apps</li>
          <li>Physical interaction design</li>
          <li>Visual design, illustration</li>
          <li>Software: Figma, Photoshop</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-semibold uppercase tracking-tight md:text-4xl">
          Development
        </h2>
        {/* <div className="mb-4 flex flex-wrap justify-start gap-2">
        {skillImgLinks.map((link, i) => (
          <div key={i}>
            <img className="w-12 shrink-0 grow-0" src={link} />
          </div>
        ))}
      </div> */}
        <ul className="list-inside list-disc">
          <li>Languages: JavaScript, TypeScript, HTML, CSS</li>
          <li>Libraries: React, D3.js, P5.js</li>
          <li>Frameworks: Next.js, Tailwind CSS</li>
          <li>Data visualization and data sonification</li>
        </ul>
      </div>
    </>
  );
}
