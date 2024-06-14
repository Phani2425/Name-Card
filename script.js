let modal=document.querySelector('.modal');
let share=document.querySelector('#share');
let overlay=document.querySelector('.overlay');
share.addEventListener('click',()=>{
   // overlay.classList.remove('hidden');
   // modal.classList.remove('hidden');
   overlay.classList.remove('scale-0');
   modal.classList.remove('scale-0');
   overlay.classList.add('scale-1');
   modal.classList.add('scale-1');
})

function closeModal(){
   overlay.classList.add('scale-0');
   modal.classList.add('scale-0');
}

overlay.addEventListener('click',closeModal);

let xmark=document.querySelector('#x-mark');
xmark.addEventListener('click',closeModal);