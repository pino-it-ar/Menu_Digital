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
            // Desactiva todas las pestañas y oculta todas las secciones
            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(s => s.classList.add("d-none"));

            // Activa la pestaña actual y muestra su sección correspondiente
            tab.classList.add("active");
            document.querySelector(tab.dataset.bsTarget).classList.remove("d-none");
        });
    });
    
    /* Modal */
    const products = document.querySelectorAll(".menu-item");

    // Referencias al modal
    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    const modalTitle = document.getElementById("productModalLabel");
    const modalImg = document.getElementById("productModalImg");
    const modalDesc = document.getElementById("productModalDesc");
    const modalPrice = document.getElementById("productModalPrice");

    // Evento para cada producto
    products.forEach(product => {
      product.addEventListener("click", () => {
        // Obtener datos del producto
        const name = product.dataset.name;
        const img = product.dataset.img;
        const desc = product.dataset.desc;
        const price = product.dataset.price;

        // Cargar datos en el modal
        modalTitle.textContent = name;
        modalImg.src = img;
        modalDesc.textContent = desc;
        modalPrice.textContent = price;

        // Mostrar modal
        productModal.show();
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
        // Actualiza el icono de la flecha según el estado del footer
        if (footer.classList.contains("show")) {
            toggleFooterBtn.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
        } else {
            toggleFooterBtn.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
        }


    });
});
