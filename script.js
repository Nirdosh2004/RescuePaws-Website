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

function sendMail(){
          var templateParams = {
                    my_name: document.getElementById("my_name").value,
                    email_id: document.getElementById("email_id").value,
                    message:document.getElementById("message").value,
                    
                };
                
                emailjs.send("service_a21yug9","template_fcvcmft", templateParams)
                    .then(function(response) {
                      alert("Email Send successfully. Thankyou!");
                    }, function(err) {
                       alert('FAILED... to sent . Try again!');
                    });
}
function sendPhotoMail(){
          var templateParams = {
                    my_name: document.getElementById("my_name").value,
                    email_id: document.getElementById("email_id").value,
                    message:document.getElementById("message").value,
                    photo:document.getElementById("photo").value,
                    
                };
                
                emailjs.send("service_a21yug9","template_fcvcmft", templateParams)
                    .then(function(response) {
                      alert("Email Send successfully. Thankyou!");
                    }, function(err) {
                       alert('FAILED... to sent . Try again!');
                    });
}