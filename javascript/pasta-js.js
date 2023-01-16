document.getElementById("spagetti").addEventListener("click", function() {
    document.querySelector(".spagetti-card").classList.add("is-active");
    document.querySelector(".spagetti").classList.add("is-active");
    document.getElementById("shadow-background-1").classList.add("is-active");
});
document.getElementById("mamamia").addEventListener("click", function() {
    document.querySelector(".mamamia-card").classList.add("is-active");
    document.querySelector(".pizza-mamamia").classList.add("is-active");
    document.getElementById("shadow-background-2").classList.add("is-active");
});
document.getElementById("quatroformagi").addEventListener("click", function() {
    document.querySelector(".quatro-formagi-card").classList.add("is-active");
    document.querySelector(".quatro-formagi").classList.add("is-active");
    document.getElementById("shadow-background-3").classList.add("is-active");
});
document.getElementById('shadow-background-1').addEventListener("click" , function() {
    document.querySelector(".spagetti-card").classList.remove("is-active");
   document.getElementById("shadow-background-1").classList.remove("is-active");
});
document.getElementById('shadow-background-2').addEventListener("click" , function() {
    document.querySelector(".mamamia-card").classList.remove("is-active");
   document.getElementById("shadow-background-2").classList.remove("is-active");
});
document.getElementById('shadow-background-3').addEventListener("click" , function() {
    document.querySelector(".quatro-formagi-card").classList.remove("is-active");
   document.getElementById("shadow-background-3").classList.remove("is-active");
});
document.getElementById('close-button-1').addEventListener("click" , function() {
    document.getElementById("pizza-card-wrapper").classList.remove("is-active");
    document.querySelector(".spagetti").classList.remove("is-active");
    document.querySelector(".mamamia").classList.remove("is-active");
    document.querySelector(".quatro-formagi").classList.remove("is-active");
    document.getElementById("shadow-background").classList.remove("is-active");
});