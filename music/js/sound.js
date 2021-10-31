const sounds = ['crash','lotom','midblock','platsen','tamtam'];
sounds.forEach(sound=>{
    const btn= document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener("click",function(){
        document.getElementById(sound).play();
    })
    document.getElementById("buttons").appendChild(btn);
})