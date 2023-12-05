const displayNavList=document.getElementById("mobile-nav")
const navToggle=document.getElementById("mobile-nav-toggle");




navToggle.addEventListener("click",()=>{
        const status=displayNavList.getAttribute("data-visible")
console.log(status)

if(status ==="false"){
console.log("expand nav")
displayNavList.setAttribute("data-visible",true)
navToggle.setAttribute("aria-expanded",true)
}

else if(status==="true"){
console.log("collapse nav")
displayNavList.setAttribute("data-visible",false)
navToggle.setAttribute("aria-expanded",false)
}
})



