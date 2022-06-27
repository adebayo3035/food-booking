var acc = document.getElementsByClassName("hamburger");
// var acc = document.getElementById("hamburger");
var i;
for(i = 0; i<acc.length; i++){
    acc[i].addEventListener("click", function(){
        // Toggle between adding and removing the active class, to ighlight the button that controls the panel
         this.classList.toggle("active");
        // this.idList.toggle("active");

        // Toggle between hiding and showing the active panel
         var panel = this.nextElementSibling;
    //    var panel = document.getElementsByClassName("panel");
        if(panel.style.display === "block"){
            panel.style.display ="none";
        }else{
            panel.style.display ="block"
            
        }
    });
}