"use strict";var slide_thumbnail=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0,breakpoints:{320:{direction:"horizontal"},560:{direction:"horizontal"},991:{direction:"horizontal"},1200:{direction:"vertical"}}}),progressSlide=document.querySelector(".js-progress"),slide_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3,disableOnInteraction:!1},on:{init:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("animate"),progressSlide.classList.add("active")},slideChangeTransitionStart:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("active")},slideChangeTransitionEnd:function(){progressSlide.classList.add("animate")}}}),allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games"),logar=(allFilters.forEach(function(t,s){t.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[s].classList.add("active"),t.classList.add("active")})}),document.querySelector(".js-logar")),closeModal=document.querySelector(".js-close"),html=document.documentElement,btnMenu=(logar.addEventListener("click",function(e){e.preventDefault(),html.classList.add("show-modal")}),closeModal.addEventListener("click",function(e){e.preventDefault(),html.classList.remove("show-modal")}),document.querySelectorAll(".js-btn-menu")),siteMenu=document.querySelectorAll(".js-menu");btnMenu.forEach(function(t,s){t.addEventListener("click",function(e){e.preventDefault(),siteMenu.forEach(function(e){e.classList.remove("active"),e.addEventListener("mouseleave",function(){e.classList.remove("active"),btnMenu.forEach(function(e){e.classList.remove("active")})})}),btnMenu.forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),siteMenu[s].classList.add("active")})});