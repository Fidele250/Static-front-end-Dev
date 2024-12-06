// changing the nav background by using javascript

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
})

//  show/hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => { faq.addEventListener('click', () =>{
 faq.classList.toggle('open') ;
 
 //changing the plus icon to minus icon
 const icon =faq.querySelector('.faq__icon i');
 if (icon.className === 'uil uil-plus'){
    icon.className ="uil uil-minus"

    
 }
 else{
    icon.className = "uil uil-plus"
}


})
    
}); 

const menu = document.querySelector(".nav__menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

//open function fo nav bars

menubtn.addEventListener("click" ,() => {
menu.style.display = "flex" ;
closebtn.style.display = "inline-block";
menubtn.style.display = "none";
})


//close function for nav bars

closebtn.addEventListener("click",() =>{
    menubtn.style.display = "inline-block";
    closebtn.style.display = "none";
    menu.style.display = "none";
})




