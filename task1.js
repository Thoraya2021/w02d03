const btn1=document.querySelector(".btn1")
console.log(btn1);


const changeTheSize = ()=>{
    const h = document.querySelector("h1")
    h.style.fontSize = "40px"
}
btn1.addEventListener("click",changeTheSize)



