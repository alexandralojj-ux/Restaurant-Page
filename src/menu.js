export function loadMenuPage() {
    const menu = document.querySelector("#content");
    const menuPage = document.createElement("div");
    menu.appendChild(menuPage);

    menuPage.innerHTML = `
    <h1 class="menu">Axa Restaurant MENU</h1>
    
    <div class="first-column">
        <h2 class="title">Breakfast</h2>
        <h3>English Breakfast</h3>
        <p>Main ingredients: Croissants, butter, jam, sliced cheese, ham, fresh fruit, coffee or juice.</p>
        <h3>Avocado Toast</h3>
        <p>Main ingredients: Toasted bread, mashed avocado, olive oil, salt, pepper, optional poached egg.</p>
        <h3>Continental Breakfast</h3>
        <p>Main ingredients: Croissants, butter, jam, sliced cheese, ham, fresh fruit, coffee or juice.</p>
        <h3>Yogurt Parfait</h3>
        <p>Main ingredients: Greek yogurt, granola, mixed berries (strawberries, blueberries), honey.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s3uC1OmADS5mdpNCD_yFJKa2aK5qXr8JLA7Ya--7cIA5cu-hHOFdihk&s=10" width=200px>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREm3_xHOSy7Ar0TaNYSgD02S40Fas1qD7_Hgpf4b9YNyB4yXeXoLWn_ghn&s=10" width=200px>
    </div>

    <div class="second-column">
        <img src="https://cdn.prod.website-files.com/689ee9a10ff9618ade3a3139/6937d423b8e7b3a5cb3d7914_Pan-Seared%20Beef%20Steak%20on%20Spelt%20Toast%20with%20Balsamic%20Glaze.webp" width=200px>
        <h2 class="title">Main Courses</h2>
        <h3>Grilled Salmon</h3>
        <p>Main ingredients: Salmon fillet, lemon, olive oil, garlic.</p>
        <h3>Chicken Alfredo</h3>
        <p>Main ingredients: Fettuccine pasta, chicken breast, parmesan, heavy cream.</p>
        <h3>Beef Steak</h3>
        <p>Main ingredients: Beef sirloin, butter, rosemary, garlic.</p>
        <h3>Cheeseburger</h3>
        <p>Main ingredients: Beef patty, cheddar cheese, lettuce, tomato, burger bun.</p>
        <h3>Margherita Pizza</h3>
        <p>Main ingredients: Pizza dough, tomato sauce, mozzarella, fresh basil.</p>
        <h3>Caesar Salad with Chicken</h3>
        <p>Main ingredients: Romaine lettuce, grilled chicken, croutons, parmesan, Caesar dressing.</p>
        <img src="https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/41765-sfs-grilled-salmon-10664" width=200px>
    </div>

    <div class="third-column">
        <h2 class="title">Desserts</h2>
        <h3>Chocolate Lava Cake</h3>
        <p>Main ingredients: Dark chocolate, butter, eggs, sugar, flour.</p>
        <h3>Cheesecake</h3>
        <p>Main ingredients: Cream cheese, graham cracker crust, sugar, vanilla extract.</p>
        <h3>Apple Pie</h3>
        <p>Main ingredients: Apples, cinnamon, pastry crust, sugar, butter.</p>
        <h3>Tiramisu</h3>
        <p>Main ingredients: Ladyfingers (biscuiti), mascarpone cheese, espresso coffee, cocoa powder.</p>
        <img src="https://www.cakesperiments.com/wp-content/uploads/2025/05/Tiramisu-9-1024x1536.jpg" width=200px>
    
        <h2 class="title">Drinks</h2>
        <h3>Espresso</h3>
        <p>Main ingredients: Ground coffee beans, hot water.</p>
        <h3>Fresh Orange Juice</h3>
        <p>Main ingredients: Freshly squeezed oranges, ice.</p>
        <h3>Lemonade</h3>
        <p>Main ingredients: Lemon juice, water, sugar, mint leaves.</p>
        <h3>Cappucino</h3>
        <p>Main ingredients: Espresso, steamed milk, milk foam.</p>
        <h3>Mojito</h3>
        <p>Main ingredients: White rum, lime juice, fresh mint, sugar, soda water.</p>
    </div>

    <div class="fourth-column">
        <img src="https://www.recipetineats.com/tachyon/2017/03/One-Pot-Chicken-Alfredo-2.jpg" width=200px>
        <img src="https://damndelicious.net/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg" width=200px>
    </div>
    `
}