


const menuOpeners = document.querySelectorAll(".menu-opener");
const menuClosers = document.querySelectorAll(".menu-closer");
const mobileMenu = document.getElementById("mobile-menu");


menuClosers.forEach( item => {
    item.addEventListener( "click" , closeMenu);
})

menuOpeners.forEach( item => {
    item.addEventListener( "click" , openMenu);
})


//Adding class 'opened' on the end of transition, to be able to check if menu is open correctly
mobileMenu.addEventListener("transitionend", () => {
    if(mobileMenu.classList.contains("open")){
        mobileMenu.classList.add("opened");
    }else{
        mobileMenu.classList.remove("opened");
    }
})



function closeMenu(){
    if(mobileMenu.classList.contains("open")){
        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");
        closeSubmenus();
    }
}


function openMenu(){
    if(!mobileMenu.classList.contains("open")){
        mobileMenu.classList.add("open");
        document.body.classList.add("menu-open");
    }
}

/**
 * @returns True/False Depending on the state of the menu
 */
function menuIsOpen(){
    return mobileMenu.classList.contains("opened") ? true : false;
}



/**
 * Listener to close menu in case its open and user clicks outside
 */
document.querySelector("body").addEventListener( "click", (e) => {
    if(menuIsOpen()){
        if(mobileMenu.contains(e.target)){
            return;
        }
        else{
            closeMenu();
        }
    }
})


/**
 * Mobile menu functionality
*/
const submenuBtns = document.querySelectorAll("#mobile-menu li.has-submenu");
const submenus = document.querySelectorAll('#mobile-menu ul.submenu');

submenuBtns.forEach( item => {
    const submenu = item.querySelector(".submenu");
    let li = document.createElement("li");

    li.classList.add("return-btn");

    let ahref = document.createElement("a");
    ahref.innerText = "Επιστροφή";

    const returnElement = li.appendChild(ahref);
    submenu.prepend(li);



    returnElement.addEventListener("click", (e) => {
        let submenu = e.target.closest(".submenu")
        submenu.classList.remove("open");
    });

    
    item.addEventListener("click", (e) => {
        if(e.currentTarget === e.target.parentElement){
            submenu.classList.add("open");        
        }
    })
})




/**
 * Closes all submenus in mobile menu
 */
function closeSubmenus(){
    submenus.forEach( item => {
        if(item.classList.contains("open")){
            item.classList.remove("open");
        }
    })
}


/**
 * Blog owlCarousel initialization
 */

let blogCarouselConfig = {
    margin: 20,
    responsiveClass:true,
    responsive: {
        0 : {
            items : 1,
        },
        576: {
            items: 2
        },
        960 : {
            items : 4,
        }
    }
}

$(".blog-row").owlCarousel(blogCarouselConfig);