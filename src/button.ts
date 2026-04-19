export {};

const app = document.getElementById("app");

if (app) {
  const button = document.createElement("button");
  button.textContent = "Click me";

  button.addEventListener("click", () => {
    // Add animation class
    button.classList.add("fade-out");

    // Remove after animation finishes
    setTimeout(() => {
      button.remove();
    }, 400);
  });

  app.appendChild(button);
}
