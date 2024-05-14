const kits = ['bird','cat','Dog','drum'];
const containerEl = document.querySelector('.container');

kits.forEach((kit)=>{
    const btnEL = document.createElement('button');
    btnEL.classList.add('btn');
    btnEL.innerText = kit
    btnEL.style.backgroundImage = "url(images/" + kit + ".png)"; 
    containerEl.appendChild(btnEL);
    const audioEl = document.createElement('audio')
    audioEl.src = 'sounds/' + kit + '.mp4';
    containerEl.appendChild(audioEl);
    btnEL.addEventListener('click', ()=> {
        audioEl.play();
    })
});