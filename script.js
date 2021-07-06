//Carne - 400 gr p/ pessoa + de 6 h - 650
//Cerveja - 1200 ml p/ pessoa + 6 h - 2000 ml
//Refrigerante/agua - 1000 ml p/ pessoa + 6 h - 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado")

function calcular() {
    
  const adultos = inputAdultos.value;
  const criancas = inputCriancas.value;
  const duracao = inputDuracao.value;

  const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  const qdtTotalCerveja = cervejaPP(duracao) * adultos;
  const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  resultado.innerHTML =  `<h2>Você vai precisar de:</h2> `
  resultado.innerHTML += `<p> ${qdtTotalCarne / 1000} Kg de Carne</p>`
  resultado.innerHTML += `<p> ${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja</p>`
  resultado.innerHTML += `<p> ${Math.ceil(qdtTotalBebidas / 2000)} garrafas de Bebidas</p>`
}

function carnePP(duracao) {
  if(duracao >= 6) {
    return 650;
  }else{
    return 400;
  }
}

function cervejaPP(duracao) {
  if(duracao >= 6) {
    return 2000;
  }else{
    return 1200;
  }
}

function bebidasPP(duracao) {
  if(duracao >= 6) {
    return 1500;
  }else{
    return 1000;
  }
}





