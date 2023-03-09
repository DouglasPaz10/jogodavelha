
function vencedor(resultado){
  if (resultado == 'X'){

    resultado = 'O'
    return resultado
  }
  
  else{
    resultado = 'X'

    return resultado
  }

}




function verifica_vitoria() {
  var a1 = document.getElementById('a1').textContent;
  var a2 = document.getElementById('a2').textContent;
  var a3 = document.getElementById('a3').textContent;
  
  var b1 = document.getElementById('b1').textContent;
  var b2 = document.getElementById('b2').textContent;
  var b3 = document.getElementById('b3').textContent;
  
  var c1 = document.getElementById('c1').textContent;
  var c2 = document.getElementById('c2').textContent;
  var c3 = document.getElementById('c3').textContent;

    
    if ((a1 == a2 && a2 == a3 && a1 != '') ||
        (b1 == b2 && b2 == b3 && b1 != '') ||
        (c1 == c2 && c2 == c3 && c1 != '')) {
        alert(`a partida acabou, parabens!!!${vencedor(simbol())}parábens, você venceu`)
        somar_ponto(vencedor(simbol()))
        restart()
        console.log('ez');
        
        return true;
      }
  
    if ((a1 == b1 && b1 == c1 && a1 != '') ||
        (a2 == b2 && b2 == c2 && a2 != '') ||
        (a3 == b3 && b3 == c3 && a3 != '')) {
        alert(`a partida acabou, parabens!!!${vencedor(simbol())}parábens, você venceu`)
        somar_ponto(vencedor(simbol()))
        restart()
        return true;
    }
  
    if ((a1 == b2 && b2 == c3 && a1 != '') ||
        (a3 == b2 && b2 == c1 && a3 != '')) {
        alert(`a partida acabou, parabens!!!${vencedor(simbol())}parábens, você venceu`)
        somar_ponto(vencedor(simbol()))
        restart()
        return true;
    }     
  
    if (a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) {
        restart()
        alert('empate');
        return true;
      
    }
  
    return false;
  }
 

function alternarXO() {
    let simbolo = 'X';
    return function() {
      const resultado = simbolo;
      simbolo = simbolo === 'X' ? 'O' : 'X';
      return resultado;
    }
  }
  
  var simbol = alternarXO();
  
  function colocar(elem) {
    if (elem.innerHTML === '') {
      elem.innerHTML = simbol();
    }

    
    verifica_vitoria()
  }



function restart(){
    a1.innerHTML = ""
    a2.innerHTML = ""
    a3.innerHTML = "" 
    b1.innerHTML = "" 
    b2.innerHTML = ""
    b3.innerHTML = "" 
    c1.innerHTML = ""
    c2.innerHTML = "" 
    c3.innerHTML = ""


}



function somar_ponto(vencedor){
  if (vencedor == 'X'){
    let X = document.getElementById('pontosX')
    let texto = document.getElementById('pontosX').textContent
    let calc = parseInt(texto)
    X.innerHTML = calc+1


  }

  else{
    let O = document.getElementById('pontosO')
    let texto = document.getElementById('pontosO').textContent
    let calc = parseInt(texto)
    O.innerHTML = calc+1


}}

function atualizar_pagina(){
  window.location.reload(true);


}



