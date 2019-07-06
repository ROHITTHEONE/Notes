const menuBtn = document.getElementById('hamburger');
const ham = document.querySelector('.ham');
const menuNav = document.getElementById('list');
const menu = document.querySelector('.menu');
const navItems = document.querySelectorAll('.item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
window.addEventListener('click', hideMenu);

function toggleMenu() {
  if(!showMenu) {
    ham.classList.add('close');
    menu.innerHTML = 'CLOSE';
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    setTimeout(() => {
      showMenu = true;
    }, 1000);
  } else {
    ham.classList.remove('close');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    menu.innerHTML = 'MENU';

    showMenu = false;
  }
}

function hideMenu(e) {
  console.log(showMenu);
  if(showMenu) {
    if (e.target != menuNav || e.target !== menuBtn) {
      ham.classList.remove('close');
      menuNav.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
      menu.innerHTML = 'MENU';

      showMenu = false;
    }
  }

}
