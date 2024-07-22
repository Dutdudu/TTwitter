function trocarImagem1() {
    const img = document.getElementById('heart');
    if (img.src.includes('heart.png')) {
        img.src = '../imagens/heartfull.png';
    } else {
        img.src = '../imagens/heart.png';
    }
}
function trocarImagem2() {
    const img = document.getElementById('like');
    if (img.src.includes('like.png')) {
        img.src = '../imagens/likefull.png';
    } else {
        img.src = '../imagens/like.png';
    }
}