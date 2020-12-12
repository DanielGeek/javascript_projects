// console.log(console.log('Hola Mundo'));

let a = 10,
	b = {
		nombre: 'Daniel',
		apellido: 'Angel',
		habilidades: {
			front: ['react', 'js', 'bootstrap'],
			back: ['node', 'express', 'php', 'laravel'],
			bd: ['MySQL', 'MongoDB', 'PostGresql'],
		},
	},
	c = 'Hola',
	d = 'Spiderman',
	e = 12;
x = a + e;

// console.log('%c Mis variables', 'color:blue; font-weight: bold');

console.log({ a });
console.log({ b });
console.log({ c });
console.log({ d });
console.log({ e });
console.table({ a, b, c, d, e, x });
