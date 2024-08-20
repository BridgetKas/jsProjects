function playSound(e) {
    console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    
    if(!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}
  
function removeTransition(e) {
    console.log('What is this')
    if(e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}
  
const keys = Array.from (document.querySelectorAll('.key'))
console.log('Keys -->', keys)
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)

