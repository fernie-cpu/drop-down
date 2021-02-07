function dropDown() {
  const drop = document.getElementById('dropdown');
  const down = document.querySelector('.dropList');

  drop.addEventListener('click', (e) => {
    e.stopPropagation();
    down.classList.toggle('active');
  });
}

window.addEventListener('click', () => {
  const hide = document.querySelector('.dropList');
  hide.classList.remove('active');
});

export { dropDown };
