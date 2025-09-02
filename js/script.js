document.addEventListener("DOMContentLoaded", () => {
    /**
     * NodeList de todos los elementos con la clase 'nav-link' dentro del elemento con el ID 'menuTabs'.
     * Representa los enlaces de navegación de las pestañas en el menú.
     * @type {NodeListOf<Element>}
     */
    const tabs = document.querySelectorAll("#menuTabs .nav-link");
    /**
     * @type {NodeListOf<Element>} sections - Nodelist de todos los elementos con la clase 'menu-section'.
     * Representa las secciones del menú.
     */
    const sections = document.querySelectorAll(".menu-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // reset
            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(s => s.classList.add("d-none"));

            // activar
            tab.classList.add("active");
            document.querySelector(tab.dataset.bsTarget).classList.remove("d-none");
        });
    });

    // Modal de producto
    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            // Obtiene el producto correspondiente del array
            const producto = productos[index];

            // Rellena el contenido del modal con los datos del producto
            document.getElementById("productModalLabel").textContent = producto.name;
            document.getElementById("productModalDesc").textContent = producto.desc;
            document.getElementById("productModalPrice").textContent = producto.price;
            document.getElementById("productModalCalories").textContent = producto.calories;

            /**
             * @type {HTMLElement} ingList - Elemento HTML para la lista de ingredientes del modal.
             */
            const ingList = document.getElementById("productModalIngredients");
            ingList.innerHTML = ""; // Limpia la lista de ingredientes

            // Itera sobre cada ingrediente y crea un elemento 'li' para cada uno
            producto.ingredients.forEach(ing => {
                const li = document.createElement("li");
                li.textContent = ing.trim(); // Elimina espacios en blanco al inicio y al final
                ingList.appendChild(li); // Agrega el elemento 'li' a la lista
            });

            /**
             * @type {HTMLElement} carouselInner - Elemento HTML para el carrusel de imágenes del modal.
             */
            const carouselInner = document.getElementById("productModalImgs");
            carouselInner.innerHTML = ""; // Limpia el carrusel de imágenes

            // Crea el elemento 'img'
            const div = document.createElement("div");
            div.className = `carousel-item active`; // Agrega la clase 'active' al primer elemento
            div.innerHTML = `<img src="${producto.img.trim()}" class="d-block w-100" alt="${producto.name}">`;
            carouselInner.appendChild(div); // Agrega el elemento 'div' al carrusel

            modal.show(); // Muestra el modal
        });
    });

    /**
     * Botón para alternar la visibilidad del footer.
     * @type {HTMLElement}
     */
    const toggleFooterBtn = document.getElementById("toggleFooterBtn");
    /**
     * Elemento footer.
     * @type {HTMLElement}
     */
    const footer = document.querySelector("footer");

    toggleFooterBtn.addEventListener("click", () => {
        footer.classList.toggle("show");
        // Actualizar el icono de la flecha según el estado
        if (footer.classList.contains("show")) {
            toggleFooterBtn.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
        } else {
            toggleFooterBtn.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
        }
    });
});