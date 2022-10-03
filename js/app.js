function menuControl(menuOpen, menuClose_one, menuClose_two, menuClose_three)
{
  document.getElementById('back').style.display = 'block';
  document.getElementById(menuOpen).style.display = "block";
  document.getElementById(menuClose_one).style.display = "none";
  document.getElementById(menuClose_two).style.display = "none";
  document.getElementById(menuClose_three).style.display = "none";
  document.getElementById('greeting').style.display = "none";
  document.getElementById('category').style.display = "none";
}