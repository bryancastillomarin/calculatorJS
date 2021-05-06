'use strict'

window.addEventListener('load', function() {

	const DISPLAY = document.querySelector('input');

	const NUMEROS = document.querySelectorAll('.numero');
	const OPERADORES = document.querySelectorAll('.operador');

	const PUNTO = document.querySelector('.punto');
	const IGUAL = document.querySelector('.igual');

	let numeroA = 0;
	let numeroB = 0;
	let operacionActual = '';
	let puntoBandera = true;
	let operadorBandera = false;
	let igualContador = 0;

	DISPLAY.value = 0;

	NUMEROS.forEach(function(numero) {
		numero.addEventListener('click', function() {
			escribir(numero.innerHTML);
		});
	});

	OPERADORES.forEach(function(operador) {
		operador.addEventListener('click', function() {
			operacionActual = operador.innerHTML;
			numeroA = +DISPLAY.value;
			operadorBandera = true;
			igualContador = 0;
		});
	});

	PUNTO.addEventListener('click', function() {
		if (puntoBandera) {
			puntoBandera = true;
			escribir('.');
		}
	});

	IGUAL.addEventListener('click', function() {
		if (igualContador === 0) {
			numeroB = +DISPLAY.value;
			igualContador++;
		} else {
			numeroA = +DISPLAY.value;
		}
		operadorBandera = true;
		calcular(numeroA, numeroB, operacionActual);
	});

	function calcular(a, b, operador) {
		switch(operador) {
			case '+':
				DISPLAY.value = a + b;
			break;
			case '-':
				DISPLAY.value = a - b;
			break;
			case '*':
				DISPLAY.value = a * b;
			break;
			case '/':
				DISPLAY.value = a / b;
			break;
		}
	}

	function escribir(valor) {
		if(DISPLAY.value == 0) {
			DISPLAY.value = valor;
		}
		else if (operadorBandera) {
			DISPLAY.value = valor;
			operadorBandera = false;
		}
		else if (DISPLAY.value.length < 12) {
			DISPLAY.value += valor;
		} 
	}
});