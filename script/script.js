var palavras = ['BANANA', 'COMPUTADOR', 'HTML', 'JAVASCRIPT', 'CSS'];
var botao = document.querySelector(".botao");
var tabuleiro = document.getElementById('forca').getContext('2d');
var letras = [];
var palavraCorreta = '';
var palavraSecreta = '';
var erros = 7;
var acertos = 0;
   

function EcolherPalavraSecreta(){
    var palavra = palavras[Math.floor(Math.random()*palavras.length)];
    palavraSecreta = palavra;
    return palavra;
}


function escreverTracinho(){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.beginPath();
    var eixo = 600/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(500 + (eixo*i),540);
        tabuleiro.lineTo(550 + (eixo*i),540);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}
escreverTracinho(EcolherPalavraSecreta());


function escreverLetraCorreta(index){
    tabuleiro.font = 'bold 52px Arial';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";
    var eixo =  600/palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index],505+(eixo*index), 520);
    tabuleiro.stroke();

    acertos++;
    if(acertos === palavraSecreta.length){
        vitoria();
    }
}

function ecreverLetraIncorreta(letras, errosLeft){
    tabuleiro.font = 'bold 40px Arial';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.fillText(letras, 500+(40*(10-errosLeft)),610,40);
}

function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0 ){
        letras.push(key);
        return false;
    }else{
        letras.push(key.toUpperCase());
        return true;
    }
}

function adicinarLetraCorreta (i){
    palavraCorreta += palavraSecreta[i].toUpperCase();

}

function adicionarLetraIncorreta (letter) {
    if(palavraSecreta.indexOf(letter) <= 0){
        erros-=1;
        switch (erros){
            case 6 :
                desenhaForca();
                break;
            case 5 :
                desenhaCabeca();
                break;
            case 4 :
                desenhaCorpo();
                break;
            case 3 :
                desenhaPernaEsquerda();
                break;
            case 2 :
                desenhaPernaDireita();
                break;
            case 1 :
                desenhaBracoEsquerdo();
                break;
            case 0 : 
                desenhaBracoDireito();
                derrota()
                break;
        }
    }
}

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();
    if(! verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            adicinarLetraCorreta(palavraSecreta.indexOf(letra))
            for(let i = 0; i < palavraSecreta.length; i++){
                if(palavraSecreta[i] === letra){
                    escreverLetraCorreta(i);
                }

            }
        }else{
            if(!verificarLetraCorreta(e.key))
            return
            adicionarLetraIncorreta(letra);
            ecreverLetraIncorreta(letra,erros);
        }
    }

}



function derrota(){
    tabuleiro.fillText("Você perdeu!",300,200);
    botao.style.visibility = "visible";
    
}

function vitoria(){
    tabuleiro.fillText("Você venceu!",300,200);
    botao.style.visibility = "visible";
    
}





