// document.addEventListener('DOMContentLoaded', () => {
//     const cartItems = document.getElementById('cart-items');

//     let cart = [];

//     // Function to add a product to the cart
//     window.addToCart = function(productId) {
//         const productElements = document.querySelectorAll('.product');
//         const productElement = Array.from(productElements).find(el => el.getAttribute('data-id') === productId.toString());

//         if (productElement) {
//             const productName = productElement.querySelector('h3').textContent;
//             const productPrice = productElement.querySelector('p').textContent.split('$')[1];

//             const product = {
//                 id: productId,
//                 name: productName,
//                 price: parseFloat(productPrice)
//             };

//             cart.push(product);
//             updateCart();
//         }
//     };

//     // Function to update the cart UI
//     function updateCart() {
//         cartItems.innerHTML = '';
//         cart.forEach(item => {
//             const cartItem = document.createElement('li');
//             cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//             cartItems.appendChild(cartItem);
//         });
//     }

//     // Checkout button functionality
//     document.getElementById('checkout').addEventListener('click', () => {
//         if (cart.length > 0) {
//             alert('Proceeding to checkout');
//         } else {
//             alert('Your cart is empty!');
//         }
//     });
// });





document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');

    let cart = [];

    // Function to add a product to the cart
    window.addToCart = function(productId) {
        const productElements = document.querySelectorAll('.product');
        const productElement = Array.from(productElements).find(el => el.getAttribute('data-id') === productId.toString());

        if (productElement) {
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = productElement.querySelector('p').textContent.split('$')[1];

            const product = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice)
            };

            cart.push(product);
            updateCart();
        }
    };

    // Function to remove a product from the cart
    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    };

    // Function to update the cart UI
    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button class="remove-button" onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Checkout button functionality
    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout');
        } else {
            alert('Your cart is empty!');
        }
    });
});
