window.addEventListener('scroll', () => {
  var sec = document.getElementById('about');

  if (window.scrollY > 700) {
    sec.style.transition = 'opacity 2s ease';
    sec.style.opacity = '0';
  } else {
    sec.style.transition = 'opacity 0.5s easem ';
    sec.style.opacity = '1';
  }
});


window.addEventListener('scroll', () => {
  var sec = document.getElementById('sec3');

  if (window.scrollY > 1300) {
    sec.style.transition = 'opacity 2s ease';
    sec.style.opacity = '0';
  } else {
    sec.style.transition = 'opacity 0.5s easem ';
    sec.style.opacity = '1';
  }
});


window.addEventListener('scroll', () => {
  var sec = document.getElementById('sec4');

  if (window.scrollY > 2000) {
    sec.style.transition = 'opacity 2s ease';
    sec.style.opacity = '0';
  } else {
    sec.style.transition = 'opacity 0.5s ease';
    sec.style.opacity = '1';
  }
});
