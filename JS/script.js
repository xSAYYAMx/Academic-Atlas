let login = document.querySelector(".log-in") 


login.addEventListener("click", ()=>{
    let form = document.getElementsByClassName("login-container")
   
    form[0].classList.add("login-box")
    form[0].style.display="block",backgroundcolor="blue";
})

let crossbtn = document.getElementById("login-cross-button")
crossbtn.addEventListener("click", ()=>{
    let form = document.getElementsByClassName("login-container")
    form[0].style.display="none";
})
// feedback-----
let feed_btn = document.getElementsByClassName("custom-button");
feed_btn[0].addEventListener("click",()=>{
    let form1 = document.getElementsByClassName("feedback-container");
    form1[0].style.display="block"
}) 
let cut = document.querySelector(".cut-btn");
    cut.addEventListener("click", ()=>{
    console.log("vvhnfh")
    let form2 = document.getElementsByClassName("feedback-container");
    form2[0].style.display="none";
})
// signin-----
let signin = document.querySelector(".sign-in");
signin.addEventListener("click",()=>{
     let username = document.getElementById("username");
     let password = document.getElementById("password");
    //  console.log("jebfbksbfbskbdkb")
    let loginicon = document.querySelector(".log-in")
    loginicon.style.display="none";
    
    let usericon = document.querySelector(".user");
    usericon.innerHTML=username.value
    usericon.style.display="block";
     let user_detail =username.value;
     console.log(user_detail)
        let form = document.getElementsByClassName("login-container")
        form[0].style.display="none";
        confirm("Do you want to login?")
        
    }
)

// menu section/////.
let menu = document.querySelector(".menu");
menu.addEventListener("click",()=>{
    console.log("gfjhcgsdjhagafs")
     let navItems = document.querySelector(".navItems");
     
     navItems.classList.toggle("menu-section");

})