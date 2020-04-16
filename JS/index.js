const mnu_lst = document.getElementById('navigation');
const hmbrgr_mnu = document.getElementById('menu');


hmbrgr_mnu.addEventListener('click',function(){
    mnu_lst.classList.toggle('menu_visible');
})

function openNav()
{
  document.getElementById("mySidenav").style.width="250px";
}
function closeNav()
{
  document.getElementById("mySidenav").style.width="0px";
}