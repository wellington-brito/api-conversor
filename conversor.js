const unidades = [
    "", "um", "dois", "três", "quatro", "cinco",
    "seis", "sete", "oito", "nove", "dez",
    "onze", "doze", "treze", "quatorze", "quinze",
    "dezesseis", "dezessete", "dezoito", "dezenove"
  ];
  
  const dezenas = [
    "", "", "vinte", "trinta", "quarenta",
    "cinquenta", "sessenta", "setenta", "oitenta", "noventa"
  ];
  
  const centenas = [
    "", "cento", "duzentos", "trezentos", "quatrocentos",
    "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"
  ];
  
  function converterMenorQueMil(numero) {
    if (numero < 20) {
      return unidades[numero];
    }
    
    if (numero < 100) {
      const unidade = numero % 10;
      const dezena = Math.floor(numero / 10);
      return dezenas[dezena] + (unidade ? " e " + unidades[unidade] : "");
    }
  
    const unidade = numero % 10;
    const dezena = Math.floor((numero % 100) / 10);
    const centena = Math.floor(numero / 100);
  
    if (numero === 100) {
      return "cem";
    }
  
    return centenas[centena] + 
           ((dezena || unidade) ? " e " + dezenas[dezena] + (unidade ? " e " + unidades[unidade] : "") : "");
  }
  
  function converterNumeroParaTexto(numero) {
    if (numero === 0) {
      return "zero";
    }
  
    if (numero < 1000) {
      return converterMenorQueMil(numero);
    }
  
    let resultado = "";
    const milhar = Math.floor(numero / 1000);
    const resto = numero % 1000;
  
    if (milhar > 0) {
      resultado += converterMenorQueMil(milhar) + " mil";
    }
  
    if (resto > 0) {
      resultado += (milhar > 0 ? (resto < 100 ? " e " : ", ") : "") + converterMenorQueMil(resto);
    }
  
    return resultado;
  }
  

module.exports = converterNumeroParaTexto;
  