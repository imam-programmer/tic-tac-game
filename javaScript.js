let boxs=document.querySelectorAll('.box');
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let valuO=true;
boxs.forEach((box)=>{
   box.addEventListener('click',()=>{
      if(valuO){
        box.innerHTML='O'
         valuO=false
      }else{
         box.innerHTML='X'
         valuO=true
      }
      box.disabled=true;
      fun()
   })
})
const fun=()=>{
   for(let pattern of win){
      let posi1=boxs[pattern[0]].innerText;
      let posi2=boxs[pattern[1]].innerText;
      let posi3=boxs[pattern[2]].innerText;
           
      if(posi1 != "" && posi2 != "" && posi3 !=""){
         if(posi1 === posi2 && posi2 === posi3){
            showWinner(posi1)
         }
      }
   }
}
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let newBtn=document.querySelector('#new-btn')
let resetBtn=document.querySelector('#reset-btn')

const showWinner=(winner)=>{
   msg.innerText=`congratulation,winner is ${winner}`
   msgContainer.classList.remove('hide')
   disabled()
}
const resetGame=()=>{
   turnO=true;
   enable()
   msgContainer.classList.add('hide')
}
const disabled=()=>{
   for(let box of boxs){
      box.disabled=true
   }
}
const enable=()=>{
   for(let box of boxs){
      box.disabled=false
      box.innerText=""
   }
}
newBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)