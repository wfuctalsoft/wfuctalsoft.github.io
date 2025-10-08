var body = document.body,
html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

const fireflySize = 200;
const fireflySpeed = 0.05;
const fireflyTK = 0.03;
const fireflyCount = 10;

// Функция для создания светлячка
function createFirefly() {
	const firefly = document.createElement('div');

	// Устанавливаем случайную начальную позицию
	firefly.style.left = `${Math.random() * html.clientWidth}px`;
	firefly.style.top = `${Math.random() * height}px`;
    firefly.style.width = "2px";
    firefly.style.height = "2px";
    firefly.style.position = "absolute";
    firefly.style.zIndex = -1;

	let color = get_random_color();
	firefly.style.backgroundColor = color;
	firefly.style.boxShadow = `0 0 ${fireflySize}px ${fireflySize}px ${color}`

	// Добавляем светлячка на страницу
	document.body.appendChild(firefly);

	// Запускаем анимацию движения
	animateFirefly(firefly);
}

// Функция для анимации движения светлячка
function animateFirefly(firefly) {
	let x = parseFloat(firefly.style.left);
	let y = parseFloat(firefly.style.top);
	let angle = Math.random() * Math.PI * fireflyTK; // Случайное направление
	let speed = 1 + Math.random() * fireflySpeed; // Случайная скорость

	function move() {
		x += Math.cos(angle) * speed;
		y += Math.sin(angle) * speed;

		
		angle += (Math.random() - 0.5) * Math.PI * fireflyTK; // Случайное направление

		// Если светлячок выходит за границы экрана, возвращаем его обратно
		if (x < fireflySize || x > body.clientWidth - fireflySize || y < fireflySize || y > height - fireflySize) {
			angle -= Math.PI;
		}

		firefly.style.left = `${x}px`;
		firefly.style.top = `${y}px`;

		requestAnimationFrame(move); // Продолжаем анимацию
	}

	move();
}

// Создаем несколько светлячков
for (let i = 0; i < fireflyCount; i++) {
	createFirefly();
}

let texts = document.getElementsByTagName("h2");
for(let i = 0; i < texts.length; i++){
	let element = texts.item(i);
	let size = element.getBoundingClientRect();
	let S = size.width * size.height;
	element.style.width = Math.sqrt(S*1.1) + 'px';
}

function get_random_color() {
    var h = rand(240, 300);
    var s = rand(90, 100);
    var l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}