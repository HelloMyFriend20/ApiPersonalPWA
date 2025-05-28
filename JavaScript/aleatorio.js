function mostrarAleatorio() {
    const app = document.getElementById("app");
    const urlBase = 'https://picsum.photos/400';

    // Limpiamos el contenido anterior
    app.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        // Creamos un elemento imagen
        const img = document.createElement('img');
        img.src = urlBase + '?random=' + new Date().getTime() + i; // i para variar y evitar caché
        img.alt = 'Imagen aleatoria';

        // Añadimos un pequeño estilo opcional (puedes moverlo a CSS)
        img.style.margin = '10px';
        img.style.borderRadius = '8px';

        // Insertamos la imagen en el contenedor
        app.appendChild(img);
    }
}

