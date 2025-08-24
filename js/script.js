document.addEventListener("DOMContentLoaded", () => {
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
});