// const scroll = new LocomotiveScroll({
//           el: document.querySelector('.main'),
//           smooth: true
//       });

// ScrollReveal().reveal('#hero-section');
// ScrollReveal().reveal('#breeder-section');

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
          if(menuList.style.maxHeight == "0px"){
                    menuList.style.maxHeight = "300px"
          }
          else{
                    menuList.style.maxHeight = "0px";
          }
}