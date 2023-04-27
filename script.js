// home

function scrollTo8(element) {
  window.scroll({
    left: 0, 
    top: 0, 
    behavior: 'smooth'
  })
}

let button_main = document.querySelector('#main');
let position_main = document.querySelector('#main-block');

button_main.addEventListener('click', () => {
    scrollTo8(position_main);
    console.log(scrollTo8(position_main))
})

// about

function scrollTo1(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop - +140, 
    behavior: 'smooth'
  })
}

let button_about = document.querySelector('#about');
let position_about = document.querySelector('#about-block');

button_about.addEventListener('click', () => {
    scrollTo1(position_about);
    console.log(scrollTo1(position_about))
})

//project

function scrollTo2(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop - -60, 
    behavior: 'smooth'
  })
}

let button_project = document.querySelector('#project');
let pro = document.querySelector('#pro');
let position_project = document.querySelector('#project-block');

button_project.addEventListener('click', () => {
    scrollTo2(position_project);
})
pro.addEventListener('click', () => {
    scrollTo2(position_project);
})

//contact

function scrollTo3(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop - -60, 
    behavior: 'smooth'
  })
}

let button_contact = document.querySelector('#contact');
let position_contact = document.querySelector('#contact-block');

button_contact.addEventListener('click', () => {
    scrollTo3(position_contact);
})

// check

$(window).scroll(function(){
    if($(window).scrollTop() > 600){
        $(".main-header").css("opacity","0.8")
    };
    if($(window).scrollTop() < 600){
        $(".main-header").css("opacity","1")
    };
    
});

$(document).ready(function () {
    $("#contact-block").waypoint(function () {
        console.log("sdsdsd")
    })
})