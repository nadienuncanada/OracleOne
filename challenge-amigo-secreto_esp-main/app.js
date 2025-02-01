// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
	let amigos = [];
	let amigo = document.getElementById('amigo').value;
	amigos.push(amigo);

	let amigos = [];

	function agregarAmigo() {
		const input = document.getElementById('amigo');
		const nombre = input.value.trim();
		if (nombre) {
			amigos.push(nombre);
			actualizarLista();
			input.value = '';
		}
	}

	function actualizarLista() {
		const lista = document.getElementById('listaAmigos');
		lista.innerHTML = '';
		amigos.forEach((amigo, index) => {
			const li = document.createElement('li');
			li.textContent = amigo;
			lista.appendChild(li);
		});
	}
}
