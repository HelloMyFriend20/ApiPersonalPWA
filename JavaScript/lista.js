let imagenesData = []; // Guardamos los datos para el buscador

function mostrarLista() {
    const app = document.getElementById("app");
    app.innerHTML = ''; // Limpiar contenido anterior
    imagenesData = [];  // Reiniciar lista

    for (let i = 0; i < 9; i++) {
        const id = Math.floor(Math.random() * 1000); // ID aleatorio
        const nombre = `Imagen ${id}`;
        const url = `https://picsum.photos/id/${id}/300/200`;

        // Guardar info para buscador
        imagenesData.push({ id, nombre, url });
    }

    renderizarImagenes(imagenesData);
}

function renderizarImagenes(lista) {
    const app = document.getElementById("app");
    app.innerHTML = '';

    lista.forEach((imgData) => {
        const contenedor = document.createElement('div');
        contenedor.className = 'imagen-card';

        const img = document.createElement('img');
        img.src = imgData.url;
        img.alt = imgData.nombre;

        const nombre = document.createElement('p');
        nombre.textContent = imgData.nombre;

        contenedor.appendChild(img);
        contenedor.appendChild(nombre);
        app.appendChild(contenedor);
    });
}

function filtrarImagenes() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const filtradas = imagenesData.filter(img => img.nombre.toLowerCase().includes(texto));
    renderizarImagenes(filtradas);
}
