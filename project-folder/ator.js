//ATOR
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  if (keyIsDown (UP_ARROW)){
    yAtor -= 3;
    
  }
  if (keyIsDown (DOWN_ARROW)){
    yAtor += 3;
    
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
}
