// const scripts = [
//     {
//         src: '/src/main.js',
//         type: 'text/javascript',
//         name: 'Home'
//     },
//     {
//         src: '/src/earth.js.js',
//         type: 'text/javascript',
//         name: 'Earth'
//     },
//     {
//         src: '/src/wormHole.js.js.js',
//         type: 'text/javascript',
//         name: 'Wormhole'
//     },
// ];

// const navList = document.getElementById('nav-list');
// // const scriptTag = document.getElementById('3D-script');

// scripts.forEach(script => {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     a.classList.add('text-2xl text-white font-bold');
//     a.href = `#${script.name}`;
//     a.innerText = script.name;
//     li.appendChild(a);
//     navList.appendChild(li);
//     const script = document.createElement('script');
//     script.src = script.src;
//     script.onload = () => {
//         console.log(`${script.name} script loaded successfully.`);
//     };
//     script.onerror = () => {
//         console.error(`Failed to load ${script.name} script.`);
//     };
// });

const scripts = [
  {
    src: '/src/main.js',
    type: 'module', 
    name: 'Home'
  },
  {
    src: '/src/earth.js',
    type: 'module',
    name: 'Earth'
  },
  {
    src: '/src/wormHole.js',
    type: 'module',
    name: 'Wormhole'
  }
];

const navList = document.getElementById('nav-list');

scripts.forEach(item => {
  // Create navigation link
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.classList.add('text-2xl', 'text-white', 'font-bold');
  a.href = `#${item.name}`;
  a.innerText = item.name;
  li.appendChild(a);
  navList.appendChild(li);

  // Create script element
  const script = document.createElement('script');
  script.src = item.src; // Set src from scripts array
  script.type = item.type; // Set type to 'module'
  script.onload = () => {
    console.log(`${item.name} script loaded successfully.`);
  };
  script.onerror = () => {
    console.error(`Failed to load ${item.name} script.`);
  };
  document.body.appendChild(script); // Append to body
});