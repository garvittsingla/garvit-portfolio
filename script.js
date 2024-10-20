var tl = gsap.timeline()
var body = document.querySelector("body")
var pfp = document.querySelector("#pfp")
var vid1 = document.querySelector("#vid1")
var vid2 = document.querySelector("#vid2")
var vid3 = document.querySelector("#vid3")
var profilesec = document.querySelector("#profilesec")
var cursor = document.querySelector("#cursor")
gsap.registerPlugin(ScrollTrigger);

function firstpageanimation(){
    gsap.from("nav a",{
        y:-100,
        duration:0.6,
        stagger:0.3
    })
    gsap.from("#heading ",{
        y:200,
        duration:0.4,
        stagger:0.2,
        opacity:0
    
    })
    gsap.from("#projects ",{
        opacity:0,
        duration:1,
    
    })
    gsap.from("#para ",{
        opacity:0,
        duration:0.8,
        x:-200,
    
    })
    tl.from("#pfp",{
        x:200,
        duration:0.4,
        stagger:0.2
    
    })
    tl.from("#svg1",{
        x:100,
        duration:0.4,
        opacity:0
    
    
    })
    tl.from("#svg2",{
        y:100,
        duration:0.4,
        opacity:0
    
    
    })
    body.addEventListener("mousemove",function(delts){
        gsap.to("#cursor",{
            x:delts.x,
            y:delts.y,
            duration:0.3,
        })
    })
    
    pfp.addEventListener("mouseenter",function(){
        cursor.innerHTML = "Follow me &larr;",
        cursor.addEventListener("click", function() {
            window.location.href = "https://x.com/garvits093";  
        });
    
    
        gsap.to("#cursor",{
            scale:4,
    
        })
    })
    pfp.addEventListener("mouseleave",function(){
        cursor.innerHTML = "",
    
        gsap.to("#cursor",{
            scale:1,
    
        })
    })
    
}

function secondpageanimation(){
    tl.from("ul li", {
        x: 400,
        duration: 3,
        stagger: 0.2,
        delay: 0.2,
        scrollTrigger: {
            trigger: "#page2",
            // markers: true,
            start:"top 70%",
            end:"top -9%",
            scrub: true 
        }
    });
    
    
    tl.from("#skillss", {
        opacity: 0,
        delay:0.4,
        duration: 1,
    
        scrollTrigger: {
            trigger: "#skillss", 
            // markers: true, 
            start: "top 80%", 
            end: "top 20%",
            scrub: true 
        }
    });
}

function thirdpageanimations(){
    vid1.addEventListener("mouseenter",function(){
        cursor.innerHTML = "Live demo &larr;",
        cursor.addEventListener("click", function() {
            window.location.href = "https://flux-topaz.vercel.app/";  
        });
    
    
        gsap.to("#cursor",{
            scale:4,
    
        })
    })
    vid1.addEventListener("mouseleave",function(){
        cursor.innerHTML = "",
    
        gsap.to("#cursor",{
            scale:1,
    
        })
    })
    
    vid2.addEventListener("mouseenter",function(){
        cursor.innerHTML = "Live demo &larr;",
        cursor.addEventListener("click", function() {
            window.location.href = "https://valorant-website-clone-blue.vercel.app/";  
        });
    
    
        gsap.to("#cursor",{
            scale:4,
    
        })
    })
    vid2.addEventListener("mouseleave",function(){
        cursor.innerHTML = "",
    
        gsap.to("#cursor",{
            scale:1,
    
        })
    })
    vid3.addEventListener("mouseenter",function(){
        cursor.innerHTML = "Live demo &larr;",
        cursor.addEventListener("click", function() {
            window.location.href = "https://bitebox-food-website.vercel.app/";  
        });
    
    
        gsap.to("#cursor",{
            scale:4,
    
        })
    })
    vid3.addEventListener("mouseleave",function(){
        cursor.innerHTML = "",
    
        gsap.to("#cursor",{
            scale:1,
    
        })
    })
}
gsap.from("#profilesec",{
    opacity:0.5,
    // duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#page4",
        scrub:2,
        start:"top 30%",
        end:"top 70%",
        // markers:true
    }
})
firstpageanimation()
secondpageanimation()
thirdpageanimations()