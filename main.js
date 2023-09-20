let btns = document.querySelectorAll(".social-side button")

btns.forEach((e)=>{
    e.addEventListener("click",(i)=>{
        btns.forEach((e,i)=>{{
            e.classList.remove("active")
            e.classList.add("btn")
        }})
        i.target.classList.add("active")
        window.localStorage.setItem("btn",i.target.dataset.n)
        i.target.classList.remove("btn")
        
    })
})
if(window.localStorage.getItem("btn")){
    // window.localStorage.getItem("btn").classList.add("active")
    let n = window.localStorage.getItem("btn");
    btns[n].classList.add("active")
}

let x = window.matchMedia("(max-width:1200px)")
let pop_up = document.querySelector(".pop-up")
console.log(x.matches)
if(x.matches){
    pop_up.classList.add("active")
    setTimeout(()=>{
    pop_up.classList.remove("active")

    },2000)
}