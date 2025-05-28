function mostrarBusqueda() {
    const app = document.getElementById("app");
    app.innerHTML = ''; // Limpiar contenido anterior

    // Crear contenedor de búsqueda
    const contenedor = document.createElement('div');
    contenedor.id = 'busqueda-container';
    contenedor.style.margin = '20px';
    contenedor.style.textAlign = 'center';

    // Crear input
    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'input-id';
    input.placeholder = 'Ingresa el ID de la imagen';
    input.style.padding = '8px';
    input.style.marginRight = '10px';
    input.style.borderRadius = '5px';
    input.style.border = '1px solid #ccc';

    // Crear botón
    const boton = document.createElement('button');
    boton.textContent = 'Buscar';
    boton.style.padding = '8px 16px';
    boton.style.border = 'none';
    boton.style.backgroundColor = '#007bff';
    boton.style.color = 'white';
    boton.style.borderRadius = '5px';
    boton.style.cursor = 'pointer';

    // Crear contenedor para resultado
    const resultado = document.createElement('div');
    resultado.id = 'resultado-busqueda';
    resultado.style.marginTop = '20px';

    // Acción del botón
    boton.onclick = () => {
        const id = input.value.trim();
        resultado.innerHTML = '';

        if (!id || isNaN(id)) {
            resultado.innerHTML = '<p>Por favor, ingresa un ID válido.</p>';
            return;
        }

        const url = `https://picsum.photos/id/${id}/400/300`;
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Imagen con ID ${id}`;
        img.style.borderRadius = '8px';
        img.style.maxWidth = '100%';
        img.style.marginTop = '10px';

        const nombre = document.createElement('p');
        nombre.textContent = `Mostrando imagen con ID: ${id}`;

        resultado.appendChild(img);
        resultado.appendChild(nombre);
    };

    // Agregar elementos al contenedor
    contenedor.appendChild(input);
    contenedor.appendChild(boton);
    app.appendChild(contenedor);
    app.appendChild(resultado);
}
