document.addEventListener("DOMContentLoaded", () => {
    /**
     * NodeList de todos los elementos con la clase 'nav-link' dentro del elemento con el ID 'menuTabs'.
     * Representa los enlaces de navegación de las pestañas en el menú.
     * @type {NodeListOf<Element>}
     */
    const tabs = document.querySelectorAll("#menuTabs .nav-link");
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

    // Funcionalidad para alternar la visibilidad del footer
    const toggleFooterBtn = document.getElementById("toggleFooterBtn");
    const footer = document.querySelector("footer");

    toggleFooterBtn.addEventListener("click", () => {
        footer.classList.toggle("d-none");
        // Actualizar el texto del botón según estado
        if (footer.classList.contains("d-none")) {
            toggleFooterBtn.textContent = "Mostrar Footer";
        } else {
            toggleFooterBtn.textContent = "Ocultar Footer";
        }
    });
});