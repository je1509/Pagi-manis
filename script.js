const text = " Selamat Pagi cantik ";
const container = document.getElementById('message');

let delay = 0;
for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.textContent = text[i];
  span.classList.add('char');
  span.style.animationDelay = `${delay}s`;
  if (text[i] === ":") span.classList.add('sparkle');
  container.appendChild(span);
  delay += 0.05;
}
