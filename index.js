// const house = document.getElementById("house")
// const btn = document.getElementById("btn")
// const mod = document.getElementById("mod")
// const close = document.getElementById("close")

// btn.addEventListener("click", () =>{
//     btn.classList.add('show');
// })

// close.addEventListener("click", () =>{
//     btn.classList.remove('show');
// })

// btn.addEventListener('buy now', () => {
// mod.classList.add('show')
// house.classList.add('white')
// btn.style.display = 'none'
// })

// close.addEventListener('buy now', () => {
// mod.classList.remove('show')
// house.classList.remove('white')
// btn.style.display = 'block' })
// const container = document.querySelector(".container")



const pop = document.getElementById('pop');
pop.addEventListener('click', function(){
    container.style.display ='block';
})
const cancel = document.querySelector(".cancel");   
const container = document.querySelector(".container");

cancel.addEventListener("click", ()=>{
    container.style.display = "none";
})