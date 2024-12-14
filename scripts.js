let botaosom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botaoinfo = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")




botaosom.addEventListener("click", ligarsom)
botaoinfo.addEventListener("click", mostrarmodal)
modal.addEventListener("click", escondermodal)


function ligarsom(){
    video.muted = !video.muted
}
function mostrarmodal(){
    modal.style.display = "block"
}

function escondermodal(){
    modal.style.display = "none"

}

function tocaraudio(){
    audio.play()

}

window.addEventListener("load", tocaraudio )













