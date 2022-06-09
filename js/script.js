const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipe2 = document.querySelector('.pipe2');

console.log(mario, pipe, pipe2)

function jump () {
  mario.classList.add('jump');

  setTimeout(()=>{
    
    mario.classList.remove('jump');

  },650)



}
const loop = setInterval(()=>{
  
  const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');
  
  const pipePos = pipe.offsetLeft;
  const pipePos2 = pipe2.offsetLeft;
  
  console.log(marioPos);
  

  if(  marioPos <= 115 && (pipePos <= 102 || pipePos2 <= 102) && (pipePos > 0 && pipePos2 > 0) )
  {
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPos}px`;
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePos}px`;
    pipe2.style.animation = 'none';
    pipe2.style.left = `${pipePos2}px`;


    mario.src = './imagens/game-over.png'
    mario.style.width = '70px'
    mario.style.marginLeft = '40px'

    clearInterval(loop)
  }

},10);

document.addEventListener('keyup', jump);