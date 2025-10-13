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

    // Array con los IDs de las secciones del menú
    const menuSections = ["sugerencias", "cafeteria", "dulces", "bebidas", "salados", "alcohol"];

    // Itera sobre cada sección del menú
    menuSections.forEach(sectionId => {
        // Obtiene el contenedor de la sección actual
        const menuContainer = document.getElementById(`${sectionId}-menu`);

        // Filtra los productos que pertenecen a la sección actual
        const productosSeccion = productos.filter(producto => producto.section.includes(sectionId));

        // Genera dinámicamente el HTML de los elementos del menú
        productosSeccion.forEach(producto => {
            const menuItem = document.createElement("article");
            menuItem.className = "menu-item d-flex align-items-center";
            menuItem.innerHTML = `
                <img src="${producto.img[0]}" class="thumb me-3" alt="${producto.name}">
                <div class="flex-grow-1">
                    <p class="mb-1 fw-semibold">${producto.name}</p>
                    <small class="text-muted">${producto.desc}</small>
                </div>
                <span class="fw-bold">${producto.price}</span>
            `;
            menuContainer.appendChild(menuItem);
        });

        // Obtiene los elementos del menú después de generarlos dinámicamente
        const menuItems = document.querySelectorAll(".menu-item");

        // Agrega el event listener a cada elemento del menú
        menuItems.forEach(item => {
            item.addEventListener("click", () => {
                // Obtiene el nombre del producto del elemento del menú
                const productName = item.querySelector("p").textContent;

                // Busca el producto en el array de productos
                const producto = productos.find(p => p.name === productName);

                // Rellena el contenido del modal con los datos del producto
                document.getElementById("productModalLabel").textContent = producto.name;
                document.getElementById("productModalDesc").textContent = producto.desc;
                document.getElementById("productModalPrice").textContent = producto.price;
                document.getElementById("productModalCalories").textContent = producto.calories;

                // Une los ingredientes en un solo string, separados por coma y espacio
                document.getElementById("productModalIngredients").textContent = producto.ingredients.join(', ');

                // Seleccionamos los íconos por su clase
                const veggieIcon = document.querySelector(".bi-emoji-smile");
                const sinAzucarIcon = document.querySelector(".bi-slash-circle");
                const sinTaccIcon = document.querySelector(".bi-universal-access-circle");

                // Reseteamos los íconos (quitamos la clase 'active')
                veggieIcon.classList.remove("active");
                sinAzucarIcon.classList.remove("active");
                sinTaccIcon.classList.remove("active");

                // Verificamos si el producto tiene tags y si cada tag es true
                if (producto.tags) {
                    if (producto.tags.veggie) {
                        veggieIcon.classList.add("active");
                    }
                    if (producto.tags.sinAzucar) {
                        sinAzucarIcon.classList.add("active");
                    }
                    if (producto.tags.sinTacc) {
                        sinTaccIcon.classList.add("active");
                    }
                }

                /**
                 * @type {HTMLElement} carouselInner - Elemento HTML para el carrusel de imágenes del modal.
                 */
                const carouselInner = document.getElementById("productModalImgs");
                carouselInner.innerHTML = ""; // Limpia el carrusel de imágenes

                // Itera sobre cada imagen y crea un elemento 'div' para cada una
                producto.img.forEach((image, index) => {
                    const div = document.createElement("div");
                    div.className = `carousel-item ${index === 0 ? "active" : ""}`; // Agrega la clase 'active' al primer elemento
                    div.innerHTML = `<img src="${image.trim()}" class="d-block w-100" alt="${producto.name}">`; // Crea el elemento 'img'
                    carouselInner.appendChild(div); // Agrega el elemento 'div' al carrusel
                });

                modal.show(); // Muestra el modal
            });
        });
    });
});