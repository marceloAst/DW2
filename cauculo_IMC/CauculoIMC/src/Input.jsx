function Input(){

    return(
        <div>
            <h1>Calculadora de IMC</h1>
            <div className="informacao">
                <input type="number" />
                <input type="number" />
            </div>
            <button>Calcular IMC</button>
            <p>Seu IMC é:</p>
            <p>Categoria:</p>
        </div>
    )

}

export default Input;