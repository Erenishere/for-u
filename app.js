// const messageBox = document.getElementById('message-box');
// const message = document.getElementById('message');
// const nameInput = document.getElementById('name-input');
// const submitBtn = document.getElementById('submit-btn');
// const animationBox = document.getElementById('animation-box');

// let noCount = 0;

// submitBtn.addEventListener('click', () => {
//   const name = nameInput.value.trim().toLowerCase();
//   if (name === 'bisma') {
//     message.innerHTML = 'Yes, my love! What should I call you? 💖';
//     nameInput.value = '';
//   } else if (name === 'chanda' || name === 'mano') {
//     messageBox.style.display = 'none';
//     animationBox.style.display = 'block';
//     animationBox.innerHTML = `
//       <p>I love you, my ${name}! 🐻🌹</p>
//       <button id="love-btn">I love you too 😘</button>
//       <button id="no-btn">No 😒</button>
//     `;
//     const noBtn = document.getElementById('no-btn');
//     noBtn.addEventListener('click', handleNo);
//     const loveBtn = document.getElementById('love-btn');
//     loveBtn.addEventListener('click', handleLove);
//   }
// });

// function handleNo() {
//   noCount++;
//   if (noCount === 1) {
//     message.innerHTML = 'Plzzz plzzz give me a chance, my Mano! 🥺';
//   } else if (noCount === 2) {
//     message.innerHTML = 'Mera Munna, aesa na karen na! 😢';
//   } else if (noCount >= 3) {
//     const noBtn = document.getElementById('no-btn');
//     noBtn.style.position = 'absolute';
//     noBtn.style.left = ${Math.random() * 80}%;
//     noBtn.style.top = ${Math.random() * 80}%;
//     message.innerHTML = 'Apky pas bs aik hi option hy, mera Munna ❣️';
//   }
// }

// function handleLove() {
//   animationBox.innerHTML = `
//     <p>Say something you’ve always wanted to tell me... 🌹</p>
//     <input type="text" id="final-message" placeholder="Type here">
//     <button id="final-submit">Submit</button>
//   `;
//   const finalSubmit = document.getElementById('final-submit');
//   finalSubmit.addEventListener('click', showFinalAnimation);
// }

// function showFinalAnimation() {
//   animationBox.innerHTML = `
//     <p>It’s Roses Day, my Chanda! 🌹</p>
//     <p>Teri aankhon mein sitaron jaisa noor hai 💫</p>
//     <p>I love you, and these roses are for you. 🌹</p>
//     <p>Just like roses, your love makes my life beautiful. 💖</p>
//   `;
//   // Add rose animation here using CSS or JS libraries like GSAP.
// }
