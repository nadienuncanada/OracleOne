// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
	const input = document.getElementById('amigo'); //cosigo por id el input
	const nombre = input.value.trim(); //trim para elimina los espacios en blanco
	if (nombre) {
		//me fijo si el es un valor valido
		amigos.push(nombre); //lo guardo en la lista amigos
		actualizarLista();
		input.value = ''; //limpio el input
	} else {
		alert('Debe ingresar un nombre'); //aviso si el input esta vacio
	}
}

function actualizarLista() {
	const lista = document.getElementById('listaAmigos');
	lista.innerHTML = ''; //vaciar la listaAmigos
	amigos.forEach((amigo, index) => {
		//por cada amigo en amigos
		const li = document.createElement('li'); //creo un elemento li
		li.textContent = amigo; //actualizo el texto del li
		lista.appendChild(li);
	});
}

function sortearAmigo() {
	if (amigos.length === 0) {
		alert('No hay amigos en la lista para sortear');
		return;
	}
	const indiceAleatorio = Math.floor(Math.random() * amigos.length);
	const amigoSorteado = amigos[indiceAleatorio];
	const resultado = document.getElementById('resultado');
	resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
