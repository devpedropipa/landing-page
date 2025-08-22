window.addEventListener("load", () => {
    const tagImg = document.getElementById("img-trans"); // Tag img que faz a transicao das imagens
    // Imagens
    const imgs = {
        notebook: "img/img2.png",
        tablet: "img/img3.png",
        fone: "img/img4.png",
        kitTM: "img/img5.png",
    }

    // Estilo da tag
    tagImg.style.transitionDuration = "1.0s" // Transição da opacidade

    // Transição de imagens
    function TempoTransImg() {
        tagImg.style.opacity = "0"
        setTimeout(() => {
            if (tagImg.src.endsWith("img2.png")){
                tagImg.style.opacity = "1"
                tagImg.src = imgs.tablet
            } else if (tagImg.src.endsWith("img3.png")) {
                tagImg.style.opacity = "1"
                tagImg.src = imgs.fone
            } else if (tagImg.src.endsWith("img4.png")) {
                tagImg.style.opacity = "1"
                tagImg.src = imgs.kitTM
            } else if (tagImg.src.endsWith("img5.png")) {
                tagImg.style.opacity = "1"
                tagImg.src = imgs.notebook
            }
        }, 1000) // Tempo que leva para ser executado
    }
    setInterval(TempoTransImg, 5000) // Intervalo para transição
});