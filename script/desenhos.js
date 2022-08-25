
    function desenhaForca() {
        tabuleiro.fillStyle = "#0A3871"
        tabuleiro.fillRect(100, 60, 6, 350)
        tabuleiro.fillStyle = "#0A3871"
        tabuleiro.fillRect(100, 60, 140, 6)
        tabuleiro.fillStyle = "#0A3871"
        tabuleiro.fillRect(237.5, 60, 6, 52)
        tabuleiro.fillStyle = "black"
    }

    function desenhaCabeca() {
        tabuleiro.beginPath();
        tabuleiro.strokeStyle = "#0A3871";
        tabuleiro.lineWidth = "6";
        tabuleiro.arc(240, 150, 30, 0, Math.PI *2);
        tabuleiro.stroke();
        
    }
    
    function desenhaCorpo() {
        tabuleiro.beginPath();
        tabuleiro.strokeStyle = "#0A3871";
        tabuleiro.lineWidth = "6";
        tabuleiro.lineCap = "round";
        tabuleiro.moveTo(240,250);
        tabuleiro.lineTo(240,180);
        tabuleiro.stroke();
    }
    
    function desenhaBracoDireito() {
        tabuleiro.beginPath();
        tabuleiro.strokeStyle = "#0A3871";
        tabuleiro.lineWidth = "6";
        tabuleiro.lineCap = "round";
        tabuleiro.moveTo(240,195);
        tabuleiro.lineTo(300,250);
        tabuleiro.stroke();
    }
    
    function desenhaBracoEsquerdo() {
        tabuleiro.beginPath();
        tabuleiro.strokeStyle = "#0A3871";
        tabuleiro.lineWidth = "6";
        tabuleiro.lineCap = "round";
        tabuleiro.moveTo(240,195);
        tabuleiro.lineTo(180,250);
        tabuleiro.stroke();
    } 
    
    function desenhaPernaDireita() {
        tabuleiro.beginPath();
        tabuleiro.strokeStyle = "#0A3871";
        tabuleiro.lineWidth = "6";
        tabuleiro.lineCap = "round";
        tabuleiro.moveTo(240,250);
        tabuleiro.lineTo(300,350);
        tabuleiro.stroke();
    }
    
    function desenhaPernaEsquerda() {
        tabuleiro.beginPath();
        tabuleiro.strokeStyle = "#0A3871";
        tabuleiro.lineWidth = "6";
        tabuleiro.lineCap = "round";
        tabuleiro.moveTo(240,250);
        tabuleiro.lineTo(200,350);
        tabuleiro.stroke();
    }