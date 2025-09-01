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
    // Modal de producto
    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
      item.addEventListener("click", () => {
      const name = item.dataset.name || "Producto";
      const desc = item.dataset.desc || "";
      const price = item.dataset.price || "";
      const imgs = item.dataset.imgs ? item.dataset.imgs.split(",") : [item.dataset.img];
      const ingredients = item.dataset.ingredients ? item.dataset.ingredients.split(",") : [];
      const calories = item.dataset.calories || "";

      // Rellenar modal
      document.getElementById("productModalLabel").textContent = name;
      document.getElementById("productModalDesc").textContent = desc;
      document.getElementById("productModalPrice").textContent = price;
      document.getElementById("productModalCalories").textContent = calories;

      // Ingredientes
      const ingList = document.getElementById("productModalIngredients");
      ingList.innerHTML = "";
      ingredients.forEach(ing => {
        const li = document.createElement("li");
        li.textContent = ing.trim();
        ingList.appendChild(li);
      });

      // Carrusel
      const carouselInner = document.getElementById("productModalImgs");
      carouselInner.innerHTML = "";
      imgs.forEach((src, i) => {
        const div = document.createElement("div");
        div.className = `carousel-item ${i === 0 ? "active" : ""}`;
        div.innerHTML = `<img src="${src.trim()}" class="d-block w-100" alt="${name}">`;
        carouselInner.appendChild(div);
      });

      modal.show();
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
