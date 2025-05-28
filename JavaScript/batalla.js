function mostrarBatalla() {
    const app = document.getElementById("app");
    app.innerHTML = ''; // Limpiar el contenido anterior

    // Generar números aleatorios para cada jugador
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);

    // Crear URLs con los números aleatorios
    const url1 = `https://picsum.photos/400?random=${num1}`;
    const url2 = `https://picsum.photos/400?random=${num2}`;

    // Crear las imágenes
    const img1 = document.createElement('img');
    img1.src = url1;
    img1.alt = 'Jugador 1';

    const img2 = document.createElement('img');
    img2.src = url2;
    img2.alt = 'Jugador 2';

    // Crear un contenedor para las imágenes
    const contenedor = document.createElement('div');
    contenedor.style.display = 'flex';
    contenedor.style.gap = '20px';
    contenedor.style.alignItems = 'center';

    // Agregar imágenes al contenedor
    contenedor.appendChild(img1);
    contenedor.appendChild(img2);

    // Crear el mensaje del resultado
    const resultado = document.createElement('h1');
    if (num1 > num2) {
        resultado.textContent = '🏆 Gana el Jugador 1';
    } else if (num1 < num2) {
        resultado.textContent = '🏆 Gana el Jugador 2';
    } else {
        resultado.textContent = '🤝 ¡Empate!';
    }

    // Agregar todo al HTML
    app.appendChild(contenedor);
    app.appendChild(resultado);
}
