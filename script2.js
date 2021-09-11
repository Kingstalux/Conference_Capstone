const showMenu = () => {
  document.getElementById('dropMenu').classList.add('view');
};

const hideMenu = () => {
  document.getElementById('dropMenu').classList.remove('view');
};

const bars = document.getElementById('bars');
bars.onclick = function () { showMenu(); };

const cancel = document.getElementById('cancel');
cancel.onclick = function () { hideMenu(); };