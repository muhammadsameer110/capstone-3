const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    loginBtn.addEventListener('click', () => {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      loginBtn.classList.add('active');
      signupBtn.classList.remove('active');
    });

    signupBtn.addEventListener('click', () => {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      signupBtn.classList.add('active');
      loginBtn.classList.remove('active');
    });