const destino = document.currentScript.dataset.destino;
window.location.replace(destino + window.location.search + window.location.hash);
