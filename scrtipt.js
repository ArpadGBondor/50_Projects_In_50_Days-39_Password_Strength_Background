const backgroundElement = document.getElementById('background');
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  backgroundElement.style.filter = `blur(${Math.max(0, 20 - password.length * 2)}px)`;
});
