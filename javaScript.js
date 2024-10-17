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
  let cart = [];
    
    
    function updateCart() {
      const cartCount = document.querySelector('.badge.beg'); 
      const cartTotal = document.querySelector('.my-cart-total'); 
    
      
      cartCount.textContent = cart.length;
    
      
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      cartTotal.textContent = `€${total.toFixed(2)}`;
    }
    
    
    function addToCart(name, price) {
      cart.push({ name, price }); // Add item to the cart
      updateCart(); // Update the cart display
    }
    
    // event listeners to the "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(name, price);
      });
    });
    
    
    updateCart();