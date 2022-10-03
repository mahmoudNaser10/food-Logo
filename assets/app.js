let headerTop = document.querySelector("#top-header");
let mainSec = document.querySelector("main");
// console.log(mainSec.getBoundingClientRect().right);

// onscroll = _=>{
//     if (scrollY > 50 ) {
//         headerTop.style.backgroundColor = "#555"
//     } else {
//         headerTop.style.backgroundColor = ""
//     }
// }


window.addEventListener("scroll", _=>{
    if (scrollY > 50 ) {
        headerTop.style.backgroundColor = "#555"
    } else {
        headerTop.style.backgroundColor = ""
    }
})
window.addEventListener("scroll", _=>{
    if (scrollY > 50 ) {
        headerTop.style.color = "#f00"
    } else {
        headerTop.style.color = ""
    }
})