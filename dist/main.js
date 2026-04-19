const app = document.getElementById("app");
if (app) {
    let count = 0;
    // Title
    const title = document.createElement("h1");
    title.textContent = "Hello world!";
    // Counter text
    const counterText = document.createElement("p");
    counterText.textContent = `Count: ${count}`;
    // Increment button
    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.addEventListener("click", () => {
        count++;
        counterText.textContent = `Count: ${count}`;
    });
    // Decrement button
    const subtractButton = document.createElement("button");
    subtractButton.textContent = "-";
    subtractButton.addEventListener("click", () => {
        count--;
        counterText.textContent = `Count: ${count}`;
    });
    // Reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => {
        count = 0;
        counterText.textContent = `Count: ${count}`;
    });
    // Add everything to page
    app.appendChild(title);
    app.appendChild(counterText);
    app.appendChild(addButton);
    app.appendChild(subtractButton);
    app.appendChild(resetButton);
}
export {};
