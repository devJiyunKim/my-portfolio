function menuControl(menuOpen, menuClose_one, menuClose_two, menuClose_three)
{
  var menu = document.getElementById(menuOpen);
  menu.childNodes[1].childNodes[1].style.display = 'block';
  menu.style.display = "block";
  document.getElementById(menuClose_one).style.display = "none";
  document.getElementById(menuClose_two).style.display = "none";
  document.getElementById(menuClose_three).style.display = "none";
  document.getElementById('main').style.display = "none";
}