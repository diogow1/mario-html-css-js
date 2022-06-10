const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipe2 = document.querySelector('.pipe2');
const scoreVIEW = document.querySelector('.score')

console.log(mario, pipe, pipe2, scoreVIEW)

function jump () {
  mario.classList.add('jump');
 // console.log('JUMP!')
  setTimeout(()=>{
    
    mario.classList.remove('jump');

  },650)



}
var score = 0

const loop = setInterval(()=>{
  
  const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');

  const pipePos = pipe.offsetLeft;
  const pipePos2 = pipe2.offsetLeft;
  
  //Tests
  console.log(`Mario altura: ${marioPos}, Pipe posição: ${pipePos}, Pipe 2 posição: ${pipePos2}`);
  scoreVIEW.innerText = `SCORE: ${score}` 

  if(  marioPos <= 115 && (pipePos <= 102 || pipePos2 <= 102) && (pipePos > 0 && pipePos2 > 0) )
  {
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPos+10}px`;
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePos}px`;
    pipe2.style.animation = 'none';
    pipe2.style.left = `${pipePos2}px`;


    mario.src = './imagens/game-over.png'
    mario.style.width = '70px'
    mario.style.marginLeft = '40px'

    clearInterval(loop)
    console.log(score)

  } /*if (  ) {
    score = score + 1

   // console.log(score)
  }*/

},20);

document.addEventListener('keydown', jump);