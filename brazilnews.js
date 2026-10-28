/*====================================================
    FOOTBALL NEWS WEBSITE
    script.js
====================================================*/


/*=========================
  STICKY NAVBAR
=========================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(8,10,20,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        navbar.style.background = "rgba(0,0,0,.55)";
        navbar.style.boxShadow = "none";

    }

});


/*=========================
  SCROLL REVEAL
=========================*/

const reveals = document.querySelectorAll(".section");

function revealSections(){

    const trigger = window.innerHeight * 0.82;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


/*=========================
  BACK TO TOP BUTTON
=========================*/

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
  ACTIVE NAV LINK
=========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(sec=>{

        const top=sec.offsetTop-120;

        const height=sec.clientHeight;

        if(pageYOffset>=top){

            current=sec.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*=========================
  COUNTER ANIMATION
=========================*/

const counters=document.querySelectorAll(".stats h1");

let started=false;

function runCounter(){

    if(started) return;

    const stats=document.querySelector(".stats");

    if(!stats) return;

    const top=stats.getBoundingClientRect().top;

    if(top < window.innerHeight-120){

        started=true;

        counters.forEach(counter=>{

            const text=counter.innerText;

            const num=parseInt(text.replace(/\D/g,""));

            if(isNaN(num)) return;

            let count=0;

            const speed=Math.max(10,Math.floor(2000/num));

            const suffix=text.replace(/[0-9]/g,"");

            const interval=setInterval(()=>{

                count++;

                counter.innerHTML=count+suffix;

                if(count>=num){

                    counter.innerHTML=text;

                    clearInterval(interval);

                }

            },speed);

        });

    }

}

window.addEventListener("scroll",runCounter);

runCounter();


/*=========================
  GALLERY LIGHTBOX
=========================*/

const galleryImages=document.querySelectorAll(".gallery img");

const overlay=document.createElement("div");

overlay.id="lightbox";

overlay.innerHTML=`

<div class="lightbox-content">

<img id="lightbox-img">

<span id="close-lightbox">&times;</span>

</div>

`;

document.body.appendChild(overlay);

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.getElementById("close-lightbox");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

close.onclick=()=>{

    lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};


/*=========================
  HERO PARALLAX
=========================*/

const hero=document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{

    if(hero){

        hero.style.transform=`translateY(${window.pageYOffset*0.35}px)`;

    }

});


/*=========================
  IMAGE HOVER EFFECT
=========================*/

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transition=".4s";

    });

});


/*=========================
  SMOOTH LINKS
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================
  LOADING SCREEN
=========================*/

const loader=document.createElement("div");

loader.id="loader";

loader.innerHTML=`

<div class="loader-content">

<i class="fas fa-futbol"></i>

<h2>Loading Football News...</h2>

</div>

`;

document.body.appendChild(loader);

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },1200);

});


/*=========================
  CURRENT YEAR
=========================*/

const year=document.querySelector(".copyright");

if(year){

    year.innerHTML=`© ${new Date().getFullYear()} Football News Project. All Rights Reserved.`;

}

console.log("Football News Website Loaded Successfully ⚽");