document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is ready!");


    const signupBtn = document.getElementById('signupBtn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const pass = document.getElementById('signupPass').value;

            if (name && email && pass) {
                const userObj = { name, email, pass };
                localStorage.setItem(email, JSON.stringify(userObj));
                
                alert("Account saved in Local Storage!");
                console.log("Saved User:", userObj);
            } else {
                alert("Please fill all fields!");
            }
        });
    }

    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const lEmail = document.getElementById('loginEmail').value;
            const lPass = document.getElementById('loginPass').value;

            const savedUser = localStorage.getItem(lEmail);
            if (savedUser) {
                const user = JSON.parse(savedUser);
                if (user.pass === lPass) {
                    alert("Success! Welcome " + user.name);
                } else {
                    alert("Wrong Password!");
                }
            } else {
                alert("No account found with this email!");
            }
        });
    }
});