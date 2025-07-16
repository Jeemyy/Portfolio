window.addEventListener('scroll',() => {
  var spanLeft=document.getElementById('left');
  var spanRight=document.getElementById('right');
  var homeImg=document.getElementById('home-img');
  if(this.window.scrollY> 50){
    spanLeft.style.transition = 'transform 2s ease';
    spanLeft.style.transform = 'translateX(100%)';

    spanRight.style.transition = 'transform $2s ease';
    spanRight.style.transform = 'translateX(-130%)';

    homeImg.style.transition = 'opacity 2s ease';
    homeImg.style.opacity = '0';
  }else{
    spanLeft.style.transition = 'transform 2s ease';
    spanLeft.style.transform = 'translateX(0%)';

    spanRight.style.transition = 'transform 2s ease';
    spanRight.style.transform = 'translateX(0%)';

    homeImg.style.transition = 'opacity 1s ease';
    homeImg.style.opacity = '0.9';

  }
})



