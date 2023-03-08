function verifica_vitoria() {
    const a1 = document.getElementById('a1').textContent;
    const a2 = document.getElementById('a2').textContent;
    const a3 = document.getElementById('a3').textContent;
  
    const b1 = document.getElementById('b1').textContent;
    const b2 = document.getElementById('b2').textContent;
    const b3 = document.getElementById('b3').textContent;
  
    const c1 = document.getElementById('c1').textContent;
    const c2 = document.getElementById('c2').textContent;
    const c3 = document.getElementById('c3').textContent;
  
    if ((a1 == a2 && a2 == a3 && a1 != '') ||
        (b1 == b2 && b2 == b3 && b1 != '') ||
        (c1 == c2 && c2 == c3 && c1 != '')) {
        alert(`a partida acabou, parabens${simbol}`)
        setTimeout(function(){window.location.reload(true)}, 900)

      console.log('ez');
      return true;
    }
  
    if ((a1 == b1 && b1 == c1 && a1 != '') ||
        (a2 == b2 && b2 == c2 && a2 != '') ||
        (a3 == b3 && b3 == c3 && a3 != '')) {
        alert('a partida acabou!!', simbol,'vence')
        setTimeout(function(){window.location.reload(true)}, 900)
      return true;
    }
  
    if ((a1 == b2 && b2 == c3 && a1 != '') ||
        (a3 == b2 && b2 == c1 && a3 != '')) {
        alert(`a partida acabou, parabens${simbol}`)
        setTimeout(function(){window.location.reload(true)}, 900)
      return true;
    }
  
    if (a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) {
        setTimeout(function(){window.location.reload(true)}, 900)  
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
    window.location.reload(true)


}
