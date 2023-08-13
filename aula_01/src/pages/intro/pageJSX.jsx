export default function JSX() {
	const valor = 5;
	let soma;
	const titulo = <h1>Teste de título</h1>
	return (
		<>
			<h1>Valor: {valor}</h1>
			<h2>Soma: {soma = valor + 4}</h2>
			<p>{soma >= 10 ? "Ok" : "Errou"}</p>
			{titulo}
			{subtracao(valor, 3)}
		</>
	)
}

function subtracao(a, b) {
	return a - b;
}