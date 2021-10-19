const btn1=document.querySelector(".btn1")
console.log(btn1);

const changeTheSize = ()=>{
    const h = document.querySelector("h1")
    h.style.fontSize = "40px"
}
btn1.addEventListener("click",changeTheSize)



const btn2=document.querySelector(".btn2")
console.log(btn2);
const changeTheStyle = ()=>{
    const h = document.querySelector("h1")
    h.style.fontStyle = "italic"
}
btn2.addEventListener("click",changeTheStyle)






const btn3=document.querySelector(".btn3")
console.log(btn3);
const changeTheStyle =>{
    const p = document.querySelector("p")
    p.style.backgroundColor = "yellow"
}
btn3.addEventListener("click",changeTheStyle)




