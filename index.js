let cuser = document.getElementById("cuser");

let cuserblur = document.getElementById("cuserblur");

document.addEventListener("mousemove",function(dets){
    cuser.style.left = dets.x + "px";
    cuser.style.top = dets.y + "px";
    cuserblur.style.left = dets.x -200 + "px";
    cuserblur.style.top = dets.y -200 + "px";
})


gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,

height: "80px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start:"top -10%",
    end:"top -11%",
    scrub:2
  },
});




gsap.to("#main",{
    backgroundColor:"#000",
    duration: 1,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start:"top -50%",
        end:"top -8 0%",
        scrub:3
    },
})
