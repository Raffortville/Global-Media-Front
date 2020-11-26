
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
    
    //**********************   Switch "class"  FUNCTION  ***************/

    const replaceClass = (start,originalClass,newClass) => start.classList.replace(originalClass,newClass)







