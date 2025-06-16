import React, { useState } from 'react'
import Input from './Input'
import Calculo from './calculo'

export default function App() {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [resultado, setResultado] = useState(null)
  const [classificacao, setClassificacao] = useState("")

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>Calculadora de IMC</h2>
      <Input
        label="Peso (kg)"
        valor={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <Input
        label="Altura (m)"
        valor={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <Calculo
        peso={peso}
        altura={altura}
        setResultado={setResultado}
        setClassificacao={setClassificacao}
      />
      {resultado && (
        <div style={{ marginTop: '20px' }}>
          <strong>IMC:</strong> {resultado}
          <br />
          <strong>Classificação:</strong> {classificacao}
        </div>
      )}
    </div>
  )
}
