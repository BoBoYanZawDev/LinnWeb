window.addEventListener('scroll', ()=>{
    let scroll= document.getElementById('scrollTop');
    scroll.classList.toggle("active" ,window.scrollY > 500);
});
let scrolltoTop=()=>{
    window.scrollTo({
        top: 0
    })
}