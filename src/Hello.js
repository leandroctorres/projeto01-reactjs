import React, {useState, useEffect} from 'react';

function Hello({message, nome}) {

	const [counter, setCounter] = useState(0);

	useEffect( () => {
		console.log("Counter sofreu alteração");
	},[counter]);

	const hello = () => {
		console.log("Clicou no botão 'Olá!' :D");
	}

	const increment = () => {
		setCounter(counter + 1);
	}

	return (
		<div>
			<h3>{message}</h3>
			<h2>{nome}</h2>
			<button onClick={hello}>Olá!</button>
			<button onClick={increment}>Incrementar</button>
			<h1>{counter}</h1>
		</div>
	)
}

export default Hello;
