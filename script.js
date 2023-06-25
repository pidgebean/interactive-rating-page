// const btn = document.querySelector('.button');
// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     btn.style.background = 'hsl(25, 97%, 53%)';
// })

const pushed = document.querySelectorAll('.button:nth-child(i)');
for(var i = 0; i<pushed.length; i++){
    pushed[i].addEventListener('click', (e) =>{
        e.preventDefault();
        pushed[i].style.background = 'hsl(25, 97%, 53%)';
    })
}