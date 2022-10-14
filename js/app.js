var back = document.querySelectorAll('#menuBar #back');

function menuControl(menuOpen, menuClose_one, menuClose_two, menuClose_three)
{
  var menuOpen= document.getElementById(menuOpen);
  menuOpen.style.display = "block";
  menuOpen.childNodes[1].childNodes[1].style.display = 'block';
  document.getElementById(menuClose_one).style.display = "none";
  document.getElementById(menuClose_two).style.display = "none";
  document.getElementById(menuClose_three).style.display = "none";
  document.getElementById('main').style.display = "none";
}