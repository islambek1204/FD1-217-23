let fam = document.getElementById("fam");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
document.getElementById("order_action").onclick = function () {
   let hasError  = false;

   [fam, email, phone].forEach(item => {
       if (!item.value){
           item.parentElement.style.background = "red";
           hasError = true;
       } else { item.parentElement.style.background = "";}
   });

   if (!hasError) {
       [fam, email, phone].forEach(item => {
           item.value = ";"
       });
       alert("спасиба за заказ! Мы скоро свяжемся с вами!");
   }
}