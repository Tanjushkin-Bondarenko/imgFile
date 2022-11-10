
for (let i = 0; i < document.images.length; i++) {
    document.images[i].insertAdjacentHTML("afterend", `<span>${document.images[i].src}</span><br>`)
   
};
//long way
// for (let i = 0; i < document.images.length; i++)  {
//     (document.images[i], i) > setTimeout( ()=> {
//         document.images[i].classList.add("list")
//     }, 1000*(i+1))
    
// }
//short way
document.querySelectorAll("img")
    .forEach((el, i) => setTimeout(
        () => el.classList.add("list"), 2000 * (i + 1)))