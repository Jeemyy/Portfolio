var count = 1
const projects = [
  {
    img: `./img/projects/project${count++}.png`,
    title: 'Fruitkha',
    tools: ['PHP', 'Laravel', 'MySQL'], 
    description: 'Fruitkha is a simple and fast e-commerce platform for buying food, tech products, and daily essentials.',
    github: "https://github.com/Jeemyy/Fruitkha",
  },
  {
    img: `./img/projects/project${count++}.png`,
    title: 'Krencel',
    tools: ['PHP', 'Laravel', 'MySQL'], 
    description: 'Krencel is a food delivery platform that allows users to order meals from restaurants quickly and conveniently.',
    github: "https://github.com/Jeemyy/Krencel",

  },
  {
    img: `./img/projects/project${count++}.png`,
    title: 'TimeZone',
    tools: ['PHP', 'Laravel', 'MySQL'], 
    description: 'Timezone is an e-commerce platform where users can browse and purchase watches, including luxury, sport, and classic styles.',
    github: "https://github.com/Jeemyy/TownTeam",
  },
  {
    img: `./img/projects/project${count++}.png`,
    title: 'SignSpeak',
    tools: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript','Bootstrap', "React js"], 
    description: 'SignSpeak is a platform that translates spoken language into sign language using a 3D model, helping communication for the deaf and mute.',
    github: "https://github.com/jeemyy/https://github.com/Jeemyy/SignSpeak_Finish",
  },
  {
    img: `./img/projects/project${count++}.png`,
    title: 'TownTeam',
    tools: ['PHP', 'Laravel', 'MySQL', 'Database Diagram', 'JavaScript'], 
    description: 'TownTeam is an e-commerce platform for buying clothes, featuring an admin dashboard for managing products and orders.',
    github: "https://github.com/jeemyy/TownTeam",
  }


];

const container = document.querySelector('.all-cards');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className='card';
  card.innerHTML = `
   <img src="${p.img}" alt="${p.title}">
      <div class="content">
        <div class="all-tools">
          ${p.tools.map(tool => `
            <span class="tool">${tool}</span>
            `
          ).join("")}
        </div>
        <div class="body-content">
          <p id="title" class="text-2xl">${p.title}</p>  
          <p id="body">${p.description}</p>
        </div>
        <div class="links">
          <a href="${p.github}"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
  `;
  container.appendChild(card);
})
