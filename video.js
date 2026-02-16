function accionPlay() {
	if (!medio.paused && !medio.ended) {
		medio.pause();
		play.value = '\u25BA'; //\u25BA
		document.body.style.backgroundColor = '#fff';
	}
	else {
		medio.play();
		play.value = '||';
		document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar() {
	//Usar propiedad .currentTime
	//Reproducir el vídeo
	//Cambiar el valor del botón a ||
	if (!medio.paused && !medio.ended) {
		medio.currentTime = 0;
		play.value = '||';
	} else {
		medio.currentTime = 0;
		medio.play();
		play.value = '||';
	}
}
function accionRetrasar() {
	//Usar propiedad .curentTime
	//Contemplar que no existen valores negativos

	if (medio.currentTime > 5) {
		medio.currentTime -= 5;

	} else {
		medio.currentTime = 0;
	}
}
function accionAdelantar() {
	//Contemplar que no existen valores mayores a medio.duration	
	if (medio.currentTime < medio.duration - 5) {
		medio.currentTime = medio.currentTime + 5;
	} else {
		medio.currentTime = medio.duration;
	}
}
function accionSilenciar() {
	console.log(medio.muted)
	//Utilizar medio.muted = true; o medio.muted = false;
	if (medio.muted) {
		silenciar.value = 'silenciar';
		medio.muted = false;
	} else {
		medio.muted = true;
		silenciar.value = 'escuchar';

	}

}
function accionMasVolumen() {
	console.log(medio.volume)
	//Contemplar que el valor máximo de volumen es 1
	if (medio.volume < 1) {
		medio.volume += 0.1
	}

}
function accionMenosVolumen() {
	console.log(medio.volume)
	//Contemplar que el valor mínimo de volumen es 0
	if (medio.volume > 0.11) {
		medio.volume -= 0.1
	}

}

function iniciar() {

	medio = document.getElementById('medio');
	play = document.getElementById('play');
	reiniciar = document.getElementById('reiniciar');
	retrasar = document.getElementById('retrasar');
	adelantar = document.getElementById('adelantar');
	silenciar = document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);