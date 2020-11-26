
/*********** ******************** BURGER EFFECT ****************************/

const wrapBurgerMenu = document.querySelector('.wrapBurgerMenu')

const burgerLine0 = document.querySelector('.burgerLine0')
const burgerLine1 = document.querySelector('.burgerLine1')
const burgerLine2 = document.querySelector('.burgerLine2')

let toggleBurgerMenu = false

    wrapBurgerMenu.addEventListener('click', () => {

        if(!toggleBurgerMenu){

            replaceClass(burgerLine0,"burgerLine0","burgerLineEffect0")
            replaceClass(burgerLine1,"burgerLine1","burgerLineEffect1")
            replaceClass(burgerLine2,"burgerLine2","burgerLineEffect2")

            toggleBurgerMenu = true

        } else {

            replaceClass(burgerLine0,"burgerLineEffect0","burgerLine0")
            replaceClass(burgerLine1,"burgerLineEffect1","burgerLine1")
            replaceClass(burgerLine2,"burgerLineEffect2","burgerLine2")

            toggleBurgerMenu = false
        }
    });


    ///****************************    SearchBar EFFECT **************************/

const searchPara = document.querySelector('.searchPara')
const searchInput = document.querySelector('.searchInput')
const main = document.getElementById('mainFisrt')


let toggleSearchBarEffect = false

searchPara.addEventListener('click', () => {

  if(!toggleSearchBarEffect){

    replaceClass(searchInput,'searchInput','searchInputEffect')
    
    toggleSearchBarEffect = true

  } else {

    replaceClass(searchInput,'searchInputEffect','searchInput')
    

    toggleSearchBarEffect = false
  }
    
});
    

/*********************************** MODAL NAVBAR ******************************************/

const lifeDropdown = document.getElementById('Life')
const modalNavMenu = document.getElementById('modalMenuJumbtron')
const wrapMenuModal = document.querySelector('.wrapMenuModal')

let toggleDropdown = false


lifeDropdown.addEventListener('click',() => {

  if(!toggleDropdown){

    replaceClass(modalNavMenu,'modalNavMenu',"modalNavMenuEffect")
    replaceClass(wrapMenuModal,'wrapMenuModal','wrapMenuModalEffect')

    toggleDropdown = true;

  } else{

    replaceClass(modalNavMenu,'modalNavMenuEffect','modalNavMenu')
    replaceClass(wrapMenuModal,'wrapMenuModalEffect','wrapMenuModal')

    toggleDropdown = false;
  }
})





//**********************   Switch  CSS "class"  FUNCTION  ***************/

const replaceClass = (start,originalClass,newClass) => start.classList.replace(originalClass,newClass)

//**********************   add  CSS "class"  FUNCTION  ***************/

const addClass = (start,newClass) => start.classList.add(newClass);

//**********************   remove  CSS "class"  FUNCTION  ***************/

const removeClass = (start,removedClass) =>  start.classList.remove(removedClass);









