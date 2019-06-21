let ar = document.querySelector(".ar");
let currentLang = document.querySelector(".current-lang");

const toggleLanguages = () => {
    ar.parentNode.classList.toggle('languages-block--open');
};

ar.addEventListener("click", () => {
    toggleLanguages();
});

let hamburger = document.querySelector('.menu-icon');
let menu = document.querySelector('nav');

const toggleMenu = () => {
    menu.classList.toggle('active');
};

hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;

    let menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
        toggleLanguages();
    }

    let its_lang = target == ar || ar.contains(target);
    let its_currentLang = target == currentLang;

    let lang_is_active = currentLang.classList.contains('languages-block--open');

    if (!its_lang && !its_currentLang && lang_is_active) {
        toggleLanguages();
    }
});

/*
document.addEventListener('click', e => {
    let target2 = e.target;
    let its_lang = target2 == ar || ar.contains(target2);
    let its_currentLang = target2 == currentLang;

    let lang_is_active = currentLang.classList.contains('languages-block--open');

    if (!its_lang && !its_currentLang && lang_is_active) {
        toggleLanguages();
    }
});*/

let videoBlock = document.querySelector(".video--block__wr");
let videoBlur = document.querySelector(".bgBlur--light");
let videoContext = document.querySelector(".video--block__content");
let video = document.getElementById("video");
if (videoBlock) {
    videoBlock.addEventListener('click', function () {
        videoBlur.classList.remove('bgBlur--light');
        videoContext.style.display = "none";
        // video.setAttribute('autoplay', '1');
    });
}

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

require('slick-carousel');


$( document ).ready(function() {
    console.log( "ready!" );
    $('.slider').slick(
        {
            autoPlay: true
        }
    );

    /*$(".openBlock-icon").click(function() {
        $(this).toggleClass('open');
        $(".actual-tasks--item__bot").show(300);
    })*/

    $('.actual-tasks--item__top .actual-tasks--item__top__pay .openBlock-icon').click(function() {
        $(this).toggleClass('open');
        let parent = $(this).parent().parent().parent();
        // console.log(parent);
        parent.find('.actual-tasks--item__bot').slideToggle();
        $(".actual-tasks--item__top .actual-tasks--item__top__pay .openBlock-icon.open").not(parent).find('.actual-tasks--item__bot').removeClass("open").slideUp();
    });
});

const uploadButton = document.querySelector('.browse-btn');
const fileInfo = document.querySelector('.file-info');
const realInput = document.getElementById('real-input');

uploadButton.addEventListener('click', () => {
    realInput.click();
});

realInput.addEventListener('change', () => {
    const name = realInput.value.split(/\\|\//).pop();
    const truncated = name.length > 20
        ? name.substr(name.length - 20)
        : name;

    fileInfo.innerHTML = truncated;
});

$( document ).ready(function() {

    $('.openBlock-icon').click(function() {
        $(this).toggleClass('open');
        let parent = $(this).parent().parent().parent();
        // console.log(parent);
        parent.find('.actual-tasks--item__bot').slideToggle();
        $(".openBlock-icon.open").not(parent).find('.actual-tasks--item__bot').removeClass("open").slideUp();
    });

    $('.openBlockTasks-icon').click(function() {
        $(this).toggleClass('open');
        $(this).parent().toggleClass('open__bot');
        let parent = $(this).parent().parent();
        parent.find('.tasks--item__bot').slideToggle();
    });
});