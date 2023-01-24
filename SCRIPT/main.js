// window.onscroll = function  (){
//     // var y = window.pageYOffset;
//     var x = document.getElementById("header ")
//     if(window.pageYOffset>header.offsetHeight){
//         x.style.position="fixed";
//         x.style.top="0";
//     }
// }

window.onscroll = function(){
    var x = document.getElementById("scroll ")
    if(window.pageYOffset>scroll.offsetHeight){
        x.scroll.offsetHeight="100vh";
        x.style.top="0";
    }
}
function scroll (){
    window.onscroll
}