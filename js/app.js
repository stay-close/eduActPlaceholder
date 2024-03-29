// collapse menu

const collapseMenuBar=document.querySelector('.collapse_menu_bar');
const mainMenu=document.querySelector('.main_menu');

collapseMenuBar.addEventListener('click',(e)=>{
mainMenu.classList.toggle('active');
})