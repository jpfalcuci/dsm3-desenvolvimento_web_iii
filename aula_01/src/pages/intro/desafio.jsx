export default function desafio() {
	return (
		<>
			{render()}
		</>
	)
}

function render() {
	const lista = [];
	for (let i = 1; i <= 10; i++) {
		lista.push(<div>{i}</div>)
	}
	return lista;
}
