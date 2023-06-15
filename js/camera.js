const btnIniciarCamera = document.querySelector("[data-video-botao]")
const camera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const btnTirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviarFoto = document.querySelector("[data-enviar]")

let imagemUrl = ""

btnIniciarCamera.addEventListener("click", async function (){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    btnIniciarCamera.style.display = "none"
    camera.style.display = "block"
    video.srcObject = iniciarVideo
})


btnTirarFoto.addEventListener("click", function (){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemUrl = canvas.toDataURL("image/jpeg")
    camera.style.display = "none"
    mensagem.style.display = "block"
})


botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro")
    const converterDadosRetorno = JSON.parse(receberDadosExistentes)

    converterDadosRetorno.imagem = imagemUrl
    localStorage.setItem("cadastro", JSON.stringify(converterDadosRetorno))
    window.location.href = "./abrir-conta-form-3.html"
})