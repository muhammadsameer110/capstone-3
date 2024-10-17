document.querySelector(".signInForm").addEventListener("submit",function (Event) {
    Event.preventDefault();
  
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
  
    console.log(userEmail, userPassword);
    
    if (userEmail && userPassword) {
      alert("Register Successfully")
    }else{
      alert("Error")
    }
  
    window.location.href="./index.html";
  } );
//   let cart = [];
    
    
    // function updateCart() {
    //   const cartCount = document.querySelector('.badge.beg'); 
    //   const cartTotal = document.querySelector('.my-cart-total'); 
    
      
    //   cartCount.textContent = cart.length;
    
      
    //   const total = cart.reduce((sum, item) => sum + item.price, 0);
    //   cartTotal.textContent = `€${total.toFixed(2)}`;
    // }
    
    
    // function addToCart(name, price) {
    //   cart.push({ name, price }); // Add item to the cart
    //   updateCart(); // Update the cart display
    // }
    
    // event listeners to the "Add to Cart" buttons
    // document.querySelectorAll('.add-to-cart').forEach(button => {
    //   button.addEventListener('click', () => {
    //     const name = button.getAttribute('data-name');
    //     const price = parseFloat(button.getAttribute('data-price'));
    //     addToCart(name, price);
    //   });
    // });
    
    
    // updateCart();


    let cart = [];

    // Function to update the cart display
    function updateCart() {
      const cartCount = document.querySelector('.badge.beg'); // Cart count element
      const cartTotal = document.querySelector('.my-cart-total'); // Cart total element
      const cartItemsContainer = document.querySelector('.cart-items'); // Cart items container
      const cartSubtotal = document.querySelector('.cart-subtotal'); // Cart subtotal
    
      // Update the number of items in the cart
      cartCount.textContent = cart.length;
    
      // Calculate the total price
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      cartTotal.textContent = `€${total.toFixed(2)}`;
      cartSubtotal.textContent = `€${total.toFixed(2)}`;
    
      // Update the cart items in the dropdown
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
      } else {
        cartItemsContainer.innerHTML = cart
          .map(
            (item, index) => `
              <div class="d-flex justify-content-between align-items-center">
                <img src="${item.image}" alt="${item.name}" width="50">
                <div class="ms-2">
                  <strong>${item.name}</strong>
                  <div>1 × €${item.price.toFixed(2)}</div>
                </div>
                <button class="btn btn-link text-danger p-0" onclick="removeFromCart(${index})">
                  <i class="bi bi-x"></i>
                </button>
              </div>
              <hr>
            `
          )
          .join('');
      }
    }
    
    // Function to add an item to the cart
    function addToCart(name, price, image) {
      cart.push({ name, price, image }); // Add item to the cart
      updateCart(); // Update the cart display
    }
    
    // Function to remove an item from the cart
    function removeFromCart(index) {
      cart.splice(index, 1); // Remove item from the cart array
      updateCart(); // Update the cart display
    }
    
    // Attach event listeners to the "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');
        addToCart(name, price, image);
      });
    });
    
    // Initial cart update
    updateCart();