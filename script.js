window.location.href = '#myPage';

var tl = gsap.timeline()
var page1 = document.querySelector('container-xl') 
tl.from('.nav-item',{
    y:-100,
    duration:0.1,
    stagger:0.1
})

    tl.from('.head SPAN',{
        y:100,
        opacity:0,
        duration:0.1,
        stagger:0.1
    })
    
    gsap.from('.content-download',{
        opacity:0,
        // y:100,
        scale:0.9,
        duration:0.8,
        stagger:1
    })