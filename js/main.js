/* Boton hamburguesa */
/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const Boton_Hamburguesa_1 = document.querySelector('.Boton_Hamburguesa_1')
const Nav_1    = document.querySelector('.Nav_1')

Boton_Hamburguesa_1.addEventListener('click',()=>{
    Nav_1.classList.toggle('Activo_1')
})

/* Constante */
const Diseño_Slider_2 = document.querySelectorAll('.Diseño_Slider_2'),
    Circulo_2 = document.querySelectorAll('.Circulo_2');

/* Contador */
let counter = 1;
slidefun(counter);

/* FUNCIONES */
/* Slider automatico */
let timer = setInterval(automaticoSlide, 8000);
function automaticoSlide() {
	counter += 1;
	slidefun(counter);
}

/* Mover slider con botones  */
function MovimientoSlider_2(n) {
	counter += n;
	slidefun(counter);
	resetTime();
}

/* Actualizar slider */
function ActualSlider(n) {
	counter = n;
	slidefun(counter);
	resetTime();
}

/* Resetea el tiempo del slider */
function resetTime() {
	clearInterval(timer);
	timer = setInterval(automaticoSlide, 8000);
}

/* Movimiento del slider */
function slidefun(n) {
	let i;
	for(i = 0;i<Diseño_Slider_2.length;i++){
		Diseño_Slider_2[i].style.display = "none";
	}
	for(i = 0;i<Circulo_2.length;i++) {
		Circulo_2[i].className = Circulo_2[i].className.replace(' Activo_2', '');
	}
	if(n > Diseño_Slider_2.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = Diseño_Slider_2.length;
	   }
	Diseño_Slider_2[counter - 1].style.display = "block";
	Circulo_2[counter - 1].className += " Activo_2";
}

/* Hypervinculos */ 
function Ingresar(){
    location.href="../html/Colectivo_Sur_Real.html";
}

function Gmail(){
    location.href="https://www.google.com/intl/es-419/gmail/about/";
}

function Integrantes(){
    location.href="https://www.google.com/intl/es-419/gmail/about/";
}

function ProyectosHistoricos(){
    window.location.href = '../html/Proyectos_Historicos.html';
}

function Contactenos(){
    window.open('https://api.whatsapp.com/send?phone=954708490&text=Buenas tardes, me podrian brindar mas informacion sobre ustedes?', '_blank');
}

function Colectivo_Sur_Real(){
    location.href="../html/Colectivo_Sur_Real.html";
}

function Actividades(){
    location.href="../html/Actividades.html";
}

function Cañete_Cultural(){
    location.href="../html/Cañete_Cultural.html";
}

function Noticias(){
    location.href="../html/Noticias.html";
}

function Libros(){
    location.href="../html/Libros.html";
}

function Logeo(){
    location.href="../html/Logeo.html";
}

/* Proximos eventos */
function Direccion_1(){
    window.open('https://www.google.com/maps/place/Local+campestre+Doña+Flor/@-13.0602358,-76.3335474,16.5z/data=!4m5!3m4!1s0x910ffb7f74f5cbe3:0x44e52e39269c2dbf!8m2!3d-13.0609619!4d-76.3325797', '_blank');
}

function Direccion_2(){
    window.open('https://www.google.com/maps/place/Local+campestre+Doña+Flor/@-13.0602358,-76.3335474,16.5z/data=!4m5!3m4!1s0x910ffb7f74f5cbe3:0x44e52e39269c2dbf!8m2!3d-13.0609619!4d-76.3325797', '_blank');
}

function Direccion_3(){
    window.open('https://www.google.com/maps/place/Local+campestre+Doña+Flor/@-13.0602358,-76.3335474,16.5z/data=!4m5!3m4!1s0x910ffb7f74f5cbe3:0x44e52e39269c2dbf!8m2!3d-13.0609619!4d-76.3325797', '_blank');
}

function Direccion_4(){
    window.open('https://www.google.com/maps/place/Local+campestre+Doña+Flor/@-13.0602358,-76.3335474,16.5z/data=!4m5!3m4!1s0x910ffb7f74f5cbe3:0x44e52e39269c2dbf!8m2!3d-13.0609619!4d-76.3325797', '_blank');
}

function Direccion_5(){
    window.open('https://www.google.com/maps/place/Local+campestre+Doña+Flor/@-13.0602358,-76.3335474,16.5z/data=!4m5!3m4!1s0x910ffb7f74f5cbe3:0x44e52e39269c2dbf!8m2!3d-13.0609619!4d-76.3325797', '_blank');
}

function Direccion_6(){
    window.open('https://www.google.com/maps/place/Local+campestre+Doña+Flor/@-13.0602358,-76.3335474,16.5z/data=!4m5!3m4!1s0x910ffb7f74f5cbe3:0x44e52e39269c2dbf!8m2!3d-13.0609619!4d-76.3325797', '_blank');
}

function Compartir(){
    window.open('https://api.whatsapp.com/send?phone=954708490&text=Acompañanos a nuestro proximo evento! http://127.0.0.1:5501/html/Actividades.html', '_blank');
}

function Formulario_Proximos_Eventos(){
    window.open('../html/Formulario_Proximos_Eventos.html', '_blank');
}



