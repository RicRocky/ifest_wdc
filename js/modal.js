const Tampil = () => {
    let nodeModal = document.getElementById("modal");
    nodeModal.setAttribute("class", "c-container-modal");
}


const Close = () => {
    let nodeModal = document.getElementById("modal");
    nodeModal.setAttribute("class", "c-container-modal c-hide");
    Direct();
}

const Direct = () => {
    window.location.replace("../beranda.html")
} 
