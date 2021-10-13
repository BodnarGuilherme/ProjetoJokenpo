let meuPontos = 0;
let advPontos = 0;

function jogar(jogada) {
  let jogadaAdv = Math.floor(Math.random() * 3);
  let res;

  let myImg = document.getElementById("my-img")
  let adImg = document.getElementById("ad-img")

  if(jogada == 0) {
    myImg.setAttribute("src", "imgs/pedra.jpg")
  }
  if(jogada == 1) {
    myImg.setAttribute("src", "imgs/papel.jpg")
  }
  if(jogada == 2) {
    myImg.setAttribute("src", "imgs/tesoura.jpg")
  }

  if(jogadaAdv == 0) {
    adImg.setAttribute("src", "imgs/pedra.jpg")
  }
  if(jogadaAdv == 1) {
    adImg.setAttribute("src", "imgs/papel.jpg")
  }
  if(jogadaAdv == 2) {
    adImg.setAttribute("src", "imgs/tesoura.jpg")
  }

  if(jogada === jogadaAdv) res = "Empate";
  
  else if(jogada === 0 && jogadaAdv === 1){
    res = "Perdeu"
    advPontos++;
  }
  else if(jogada === 0 && jogadaAdv === 2){
    res = "Ganhou"
    meuPontos++;
  }
  else if(jogadaAdv === 0 && jogada === 1){
    res = "Ganhou"
    meuPontos++;
  }
  else if(jogadaAdv === 0 && jogada === 2){
    res = "Perdeu"
    advPontos++;
  }

  else if(jogada === 1 && jogadaAdv === 2){
    res = "Perdeu"
    advPontos++;
  }
  else if(jogada === 1 && jogadaAdv === 0){
    res = "Ganhou"
    meuPontos++;
  }
  else if(jogadaAdv === 1 && jogada === 0){
    res = "Perdeu"
    advPontos++;
  }
  else if(jogadaAdv === 1 && jogada === 2){
    res = "Ganhou"
    meuPontos++;
  }
 
  else if(jogada === 2 && jogadaAdv === 1){
    res = "Ganhou"
    meuPontos++;
  }
  else if(jogada === 2 && jogadaAdv === 0){
    res = "Perdeu"
    meuPontos++;
  }
  else if(jogadaAdv === 2 && jogada === 1){
    res = "Perdeu"
    meuPontos++;
  }
  else if(jogadaAdv === 2 && jogada === 0){
    res = "Ganhou"
    meuPontos++;
  }

  document.getElementById("resultado").innerText = res

  document.getElementById("my-pts").innerHTML = meuPontos
  document.getElementById("ad-pts").innerHTML = advPontos
}