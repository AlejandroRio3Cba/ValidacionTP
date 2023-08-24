document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("uploadForm");
    const articulosDiv = document.getElementById("articulos");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const titulo = document.getElementById("titulo").value;
        const contenido = document.getElementById("contenido").value;

        const articuloDiv = document.createElement("div");
        articuloDiv.classList.add("articulo");
        articuloDiv.innerHTML = `
            <h2>${titulo}</h2>
            <p>${contenido}</p>
        `;

        articulosDiv.appendChild(articuloDiv);

        form.reset();
    });
});


