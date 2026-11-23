const mobileIcons=document.querySelector(".mobileIcons")
const openBurger=document.querySelector("#openBurger")
const closeBurger=document.querySelector("#closeBurger")
const mobileMenu=document.querySelector(".mobileMenuList")

mobileIcons.addEventListener("click", function(){
    openBurger.classList.toggle("hide")
    closeBurger.classList.toggle("hide")
    mobileMenu.classList.toggle("showMenu")
})

const showText=document.querySelector("#showText")
const showText2=document.querySelector("#showText2")
const showText3=document.querySelector("#showText3")
const showText4=document.querySelector("#showText4")
const getText=document.querySelector(".getText")
const getText2=document.querySelector("#getText2")
const getText3=document.querySelector("#getText3")
const getText4=document.querySelector("#getText4")

showText.addEventListener("click", function(){
    getText.classList.toggle("showContent")
})

showText2.addEventListener("click", function(){
    getText2.classList.toggle("showContent")
})

showText3.addEventListener("click", function(){
    getText3.classList.toggle("showContent")
})

showText4.addEventListener("click", function(){
    getText4.classList.toggle("showContent")
})