export function loadHomePage() {
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    content.appendChild(div);

    div.innerHTML = `
    <h1>Welcome to Axa Restaurant!</h1>
    <img src="https://healthnewshub.org/wp-content/uploads/2024/03/Fast-Food-Restaurants.jpg" width=200px>
    <p>Fresh food, cozy atmosphere, unforgettable moments.</p>
    `;
}
