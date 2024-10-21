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

  //the cart
  let cart = [];


  function updateCart() {
    const cartCount = document.querySelector('.badge.beg'); 
    const cartTotal = document.querySelector('.my-cart-total'); 
    const cartItemsContainer = document.querySelector('.cart-items'); 
    const cartSubtotal = document.querySelector('.cart-subtotal'); 
  
    // Update the number of items in the cart
    cartCount.textContent = cart.length;
  
    // Calculate the total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `€${total.toFixed(2)}`;
    cartSubtotal.textContent = `€${total.toFixed(2)}`;
  
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
  
  
  function addToCart(name, price, image) {
    cart.push({ name, price, image }); 
    updateCart(); 
  }
  

  function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from the cart array
    updateCart(); //  cart display
  }
  
  // event listeners 
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault(); 
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      const image = button.getAttribute('data-image');
      addToCart(name, price, image);
    });
  });
  
  // cart update
  updateCart();
  