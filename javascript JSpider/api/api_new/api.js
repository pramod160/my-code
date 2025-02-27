// console.log("hji");

// let container = document.getElementById("container");
// console.log(container);
// let search_b = document.getElementById("search");

// async function fetchapi() {
//     let data = await fetch("https://dummyjson.com/products");
//     let result = await data.json();
//     // console.log(result)
//     let y = result.products;
// console.log(y)

//     // Initially display all products
//     container.innerHTML = ""; // Clear container before adding products
//     y.map((prajwal) => {
//         container.innerHTML += `
//             <div class="product-card">
//                 <h1>${prajwal.title}</h1>
//                 <img src="${prajwal.images[0]}" />
//                 <h1>${prajwal.warrantyInformation || "No Warranty Info"}</h1>
//                 <h1>${prajwal.category}</h1>
//                 <h1>$${prajwal.price}</h1>
//             </div> 
//         `;
//     });

//     // Search Event Listener
//     search_b.addEventListener("input", () => {
//         let value = search_b.value.toLowerCase();
//         let filteredProducts = y.filter(({ title }) => title.toLowerCase().includes(value));
//         console.log(filteredProducts);

//         // Clear container and display only filtered results
//         container.innerHTML = "";
//         filteredProducts.map(({ title, images, warrantyInformation, category, price }) => {
//             container.innerHTML += `
//                 <div class="product-card border border-info">
//                     <h1>${title}</h1>
//                     <img src="${images[0]}" />
//                     <h1>${warrantyInformation || "No Warranty Info"}</h1>
//                     <h1>${category}</h1>
//                     <h1>$${price}</h1>
//                 </div>
//             `;
//         });
//     });
// }

// fetchapi();






// console.log("hji");

// let container = document.getElementById("container");
// console.log(container);
// let search_b = document.getElementById("search");

// async function fetchapi() {
//     let data = await fetch("https://dummyjson.com/products");
//     console.log(data);
//     let result = await data.json();
//     console.log(result.products);
//     let y = result.products;
//     console.log(y);

//     // Display all products initially
//     renderProducts(y);

//     // Add event listener outside of the loop to prevent multiple bindings
//     search_b.addEventListener("input", () => {
//         let value = search_b.value.trim().toLowerCase();
//         console.log(value);

//         let filteredProducts = y.filter(({ title }) => title.toLowerCase().includes(value));

//         // Clear and render the filtered products
//         renderProducts(filteredProducts);
//     });
// }

// // Function to render products
// function renderProducts(products) {
//     container.innerHTML = ""; // Clear previous content

//     products.forEach(({ title, images, warrantyInformation, category, price }) => { //also we can use map
//         container.innerHTML += `
//         <div class="product-card">
//             <h1>${title}</h1>
//             <img src="${images[0]}" />
//             <h1>${warrantyInformation}</h1>
//             <h1>${category}</h1>     
//             <h1>${price}</h1>
//         </div>
//         `;
//     });
// }

// fetchapi();

//! ___________________________RECIPES___________________________________

console.log("RECIPES");

let container = document.getElementById("container");
console.log(container);
let search_b = document.getElementById("search");

async function fetchapi() {
    let data = await fetch("https://dummyjson.com/recipes");
    console.log(data);
    let result = await data.json();
    console.log(result);
    let y = result.recipes;
    console.log(y);

    // Display all products initially
    renderProducts(y);

    // Add event listener outside of the loop to prevent multiple bindings
    search_b.addEventListener("input", () => {
        let value = search_b.value.trim().toLowerCase();
        console.log(value);

        let filteredProducts = y.filter(({ name }) => name.toLowerCase().includes(value));

        // Clear and render the filtered products
        renderProducts(filteredProducts);
    });
}

// Function to render products
function renderProducts(products) {
    container.innerHTML = ""; // Clear previous content

    products.forEach((pramod) => { //also we can use map
        container.innerHTML += `
        <div class="product-card">
            <h1>${pramod.name}</h1>
            <img src="${pramod.image}" />
            <h1>${pramod.cuisine}</h1>
            <h1>${pramod.rating}</h1>
            <h1>${pramod.mealType}</h1>
        </div>
        `;
    });
}

fetchapi();
// prompt("Enter the name of the recipe you want to search for");