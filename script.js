
function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.create({
  trigger: ".r",
  scroller: "#main",
  start: "top 8%",
    endTrigger: ".product",
  end: "bottom 25%",
  pin: ".l",
  pinSpacing: false,
  // markers: true
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
locomotiveAnimation();


function loadingAnimation(){
var tl = gsap.timeline()
tl.from("#page1",{
  opacity:0,
  duration:0.2,
  delay:0.2
})
tl.from("#page1",{
  transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
  borderRadius:"150px",
  duration:2,
  ease:"expo.out"
})

tl.from("nav",{
  opacity:0,
  delay:-0.2
})

tl.from("#page1 h1, #page1 p, #page1 div",{
  opacity:0,
  duration:0.5,
  stagger:0.2
})
 }
loadingAnimation()



function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "21vh",
    });
    tl.to(".nav-part2 h5", {
      display: "block",
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}
navAnimation();



function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 90,
        y: dets.y - elem.getBoundingClientRect().y - 215,
      });
    });
  });
}
page2Animation();



function page3VideoAnimation() {
  var page3center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}
page3VideoAnimation();



function page7videoanimation(){
  var sections = document.querySelectorAll(".sec-right");
sections.forEach(function (elem) {
  let logo = elem.querySelector(".cur-logo")

  elem.addEventListener("mouseenter", function () {
    elem.childNodes[3].style.opacity = 1;
    elem.childNodes[3].play();

    logo.style.opacity = 1;
  });
  elem.addEventListener("mouseleave", function () {
    elem.childNodes[3].style.opacity = 0;
    elem.childNodes[3].load();

    logo.style.opacity = 0;
  });
   elem.addEventListener("mousemove", function (e) {
      let rect = elem.getBoundingClientRect();

      logo.style.left = (e.clientX - rect.left) + "100px";
      logo.style.top = (e.clientY - rect.top) + "300px";
    });
 
});
}
page7videoanimation()



function cardAnimation() {

  let cards = document.querySelectorAll(".con-left, .con-right");

  cards.forEach(function(card){

    let img = card.querySelector("img");
    let video = card.querySelector("video");

    card.addEventListener("mouseenter", function(){

      img.style.height = "25vw";
      img.style.top ="9vw" ; 
      
      video.style.height = "29vw";
      video.style.top ="9vw" ; 

      video.style.opacity = "1";
      video.play();


});

card.addEventListener("mouseleave", function(){

  img.style.height = "71%";
  video.style.height = "56.7%";
video.style.top = "18vw"
 
  video.style.opacity = "0";
  video.pause();
  video.currentTime = 0;

});

});
};
cardAnimation();


function page11Animations(){
  gsap.from("#btm11-part2 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
trigger:"#btm11-part2",
scroller:"#main",
// markers:true,
start:"top 80%",
end: "top 10%",
scrub: true
  }
}),
 gsap.from("#btm11-part3 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
trigger:"#btm11-part2",
scroller:"#main",
// markers:true,
start:"top 80%",
end: "top 10%",
scrub: true
  }
})
 gsap.from("#btm11-part4 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
trigger:"#btm11-part2",
scroller:"#main",
// markers:true,
start:"top 80%",
end: "top 10%",
scrub: true
  }
})

  ScrollTrigger.create({
    trigger: ".page11-material",
    scroller: "#main",
    start: "top 15%",
    endTrigger: "#page11",
    end: "bottom 80%%",
    pin: "#blue-btn",
    pinSpacing: false
  });

 

};

page11Animations();

// function blueButtonAnimation(){

//     let btn = document.querySelector("#blue-btn");

//     let tl = gsap.timeline({paused:true});

//     tl.to(".txt1",{
//         x:40,
//         y:-50,
//         opacity:0,
//         duration:0.35,
//         ease:"power3.inOut"
//     },"same")

//     .to(".txt2",{
//         x:0,
//         y:0,
//         opacity:1,
//         duration:0.35,
//         ease:"power3.inOut"
//     },"same");

//     btn.addEventListener("mouseenter",()=>{
//         tl.play();
//     });

//     btn.addEventListener("mouseleave",()=>{
//         tl.reverse();
//     });

// }

// blueButtonAnimation();




