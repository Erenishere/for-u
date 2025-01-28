const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const quotes = [
  "I love you more than words can express. 💖",
  "You are my sunshine on a cloudy day. 🌞",
  "Every moment with you is a treasure. 💎",
  "You are my heart, my soul, my everything. 💞",
  "I fall for you more every day. 🥰"
];

noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  alert(`Yay! I knew it! 🎉\n${randomQuote}`);
});
