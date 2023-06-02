// Drop down implementation
const dropDown1 = document.getElementById("dropdown1");
const dropDown2 = document.getElementById("dropdown2");
const dropDownMenu1 = document.querySelector("ul.drop-down-menus")
const dropDownMenu2 = document.querySelector("ul.services-drop-down")
// const hamburger = document.querySelector('.hamburger')
// const menu_start = document.querySelector('#menu');
// const menu_close = document.querySelector('#menu-close');
// const hamburger_child = document.querySelector('.drop-down');

dropDown1.addEventListener("click",()=>{
    dropDownMenu1.classList.toggle("active")
    dropDownMenu2.classList.remove("active")
})
dropDown2.addEventListener("click",()=>{
    dropDownMenu2.classList.toggle("active")
    dropDownMenu1.classList.remove("active")

})




//  current year
const currentYear = document.querySelector("span.year")
currentYear.textContent = new Date().getFullYear() 
 

menu_start.addEventListener('click', () =>{
    // menu_start.classList.toggle('active');
    menu_close.classList.toggle('active');
    hamburger_child.classList.toggle('active');
    menu_start.classList.toggle('active');
  
  
})
 
menu_close.addEventListener('click', () =>{
    // menu_start.classList.toggle('active');
    menu_close.classList.toggle('active');
    hamburger_child.classList.toggle('active');
    menu_start.classList.toggle('active');
  })