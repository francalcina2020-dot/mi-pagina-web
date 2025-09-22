document.addEventListener("DOMContentLoaded", () => {
  function generateSpaceLayer(size, selector, totalStars, duration) {
    const layer = [];
    for (let i = 0; i < totalStars; i++) {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      layer.push(`${x}vw ${y}vh 0 white`);
    }

    const container = document.querySelector(selector);
    if (container) {
      container.style.setProperty("--space-layer", layer.join(","));
      container.style.setProperty("--size", size);
      container.style.setProperty("--duration", duration);
    }
  }

  // Llama a la función para cada capa con sus respectivos valores
  generateSpaceLayer("4px", ".space-1", 100, "25s");
  generateSpaceLayer("2px", ".space-2", 50, "20s");
  generateSpaceLayer("1px", ".space-3", 25, "15s");
});