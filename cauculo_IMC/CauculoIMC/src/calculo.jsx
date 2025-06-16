import React from 'react'

export default function Calculo({ peso, altura, setResultado, setClassificacao }) {
  const calcularIMC = () => {
    const alturaEmMetros = parseFloat(altura.replace(",", "."))
    const pesoEmKg = parseFloat(peso.replace(",", "."))

    if (!alturaEmMetros || !pesoEmKg) {
      setResultado(null)
      setClassificacao("Por favor, insira valores válidos.")
      return
    }

    const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros)
    setResultado(imc.toFixed(2))

    let classificacao = ""
    if (imc < 18.5) classificacao = "Abaixo do peso"
    else if (imc < 24.9) classificacao = "Peso normal"
    else if (imc < 29.9) classificacao = "Sobrepeso"
    else if (imc < 34.9) classificacao = "Obesidade grau 1"
    else if (imc < 39.9) classificacao = "Obesidade grau 2"
    else classificacao = "Obesidade grau 3 (mórbida)"

    setClassificacao(classificacao)
  }

  return (
    <button
      onClick={calcularIMC}
      style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      Calcular IMC
    </button>
  )
}
